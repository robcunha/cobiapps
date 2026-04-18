import { NextResponse } from 'next/server';
import { verifyPubSubToken } from '../../_lib/auth.js';
import { createAdminClient } from '../../_lib/supabase.js';
import { getSubscriptionFromGooglePlay, mapPlaySubscriptionToProfile } from '../../_lib/googlePlay.js';

/**
 * Tipos de notificação do Google Play RTDN
 * https://developer.android.com/google/play/billing/rtdn-reference
 */
const NOTIFICATION_TYPES = {
    1: 'SUBSCRIPTION_RECOVERED',        // recuperada de account hold
    2: 'SUBSCRIPTION_RENEWED',          // renovada com sucesso
    3: 'SUBSCRIPTION_CANCELED',         // cancelada pelo usuário (ainda ativa até expirar)
    4: 'SUBSCRIPTION_PURCHASED',        // nova compra
    5: 'SUBSCRIPTION_ON_HOLD',          // conta suspensa por pagamento
    6: 'SUBSCRIPTION_IN_GRACE_PERIOD',  // em período de graça (pagamento pendente)
    7: 'SUBSCRIPTION_RESTARTED',        // reativada
    8: 'SUBSCRIPTION_PRICE_CHANGE_CONFIRMED',
    9: 'SUBSCRIPTION_DEFERRED',
    10: 'SUBSCRIPTION_PAUSED',
    11: 'SUBSCRIPTION_PAUSE_SCHEDULE_CHANGED',
    12: 'SUBSCRIPTION_REVOKED',         // revogada imediatamente
    13: 'SUBSCRIPTION_EXPIRED',         // expirada definitivamente
    20: 'SUBSCRIPTION_PENDING_PURCHASE_CANCELED',
};

// Tipos que exigem atualização no banco
const ACTIONABLE_TYPES = new Set([1, 2, 3, 4, 5, 6, 7, 10, 12, 13]);

export async function POST(request) {
    // 1. Verificar autenticidade do Pub/Sub (token OIDC assinado pelo Google)
    const isValid = await verifyPubSubToken(request);
    if (!isValid) {
        return NextResponse.json({ error: 'Token Pub/Sub inválido' }, { status: 401 });
    }

    // 2. Decodificar mensagem Pub/Sub
    let notification;
    try {
        const body = await request.json();
        const messageData = body?.message?.data;
        if (!messageData) {
            // Pub/Sub às vezes envia mensagens de controle sem data — ack e ignora
            return NextResponse.json({ received: true }, { status: 200 });
        }
        const decoded = Buffer.from(messageData, 'base64').toString('utf-8');
        const parsed = JSON.parse(decoded);
        notification = parsed?.subscriptionNotification;
    } catch (err) {
        console.error('[webhook] Erro ao decodificar mensagem Pub/Sub:', err.message);
        // Retornar 200 para evitar retentativas infinitas de mensagem malformada
        return NextResponse.json({ received: true }, { status: 200 });
    }

    if (!notification) {
        // Pode ser um testNotification ou outro tipo — ack silencioso
        return NextResponse.json({ received: true }, { status: 200 });
    }

    const { purchaseToken, subscriptionId, notificationType } = notification;

    if (!purchaseToken || !subscriptionId) {
        console.warn('[webhook] Notificação sem purchaseToken ou subscriptionId');
        return NextResponse.json({ received: true }, { status: 200 });
    }

    const notificationName = NOTIFICATION_TYPES[notificationType] ?? `UNKNOWN_${notificationType}`;
    console.log(`[webhook] ${notificationName} — produto: ${subscriptionId}`);

    // 3. Ignorar eventos sem ação no banco
    if (!ACTIONABLE_TYPES.has(notificationType)) {
        return NextResponse.json({ received: true }, { status: 200 });
    }

    // 4. Buscar estado atual no Google Play
    let playSubscription;
    try {
        playSubscription = await getSubscriptionFromGooglePlay(purchaseToken, subscriptionId);
    } catch (err) {
        console.error('[webhook] Erro ao consultar Google Play API:', err.message);
        // Retornar 500 para que o Pub/Sub reenvie a mensagem e tente novamente
        return NextResponse.json({ error: 'Erro ao consultar Google Play' }, { status: 500 });
    }

    // 5. Mapear e atualizar user_profiles
    const profileFields = mapPlaySubscriptionToProfile(playSubscription, subscriptionId);
    profileFields.google_purchase_token = purchaseToken;

    const supabase = createAdminClient();

    const { error: dbError } = await supabase
        .from('user_profiles')
        .update(profileFields)
        .eq('google_purchase_token', purchaseToken);

    if (dbError) {
        console.error('[webhook] Erro ao atualizar user_profiles:', dbError.message);
        // Retornar 500 para Pub/Sub retentar
        return NextResponse.json({ error: 'Erro ao salvar no banco' }, { status: 500 });
    }

    // 6. Sempre retornar 200 para confirmar recebimento ao Pub/Sub
    return NextResponse.json({ received: true }, { status: 200 });
}
