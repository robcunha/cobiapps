import { NextResponse } from 'next/server';
import { extractJwt, getUserFromJwt } from '../_lib/auth.js';
import { createAdminClient } from '../_lib/supabase.js';
import { getSubscriptionFromGooglePlay, mapPlaySubscriptionToProfile } from '../_lib/googlePlay.js';

const VALID_PRODUCT_IDS = ['controle_de_validade_starter', 'controle_de_validade_02'];

export async function POST(request) {
    // 1. Autenticação
    const jwt = extractJwt(request);
    if (!jwt) {
        return NextResponse.json({ error: 'Token de autenticação ausente' }, { status: 401 });
    }

    const { user, error: authError } = await getUserFromJwt(jwt);
    if (authError || !user) {
        return NextResponse.json({ error: 'Token inválido ou expirado' }, { status: 401 });
    }

    // 2. Validação do body
    let body;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: 'Body inválido' }, { status: 400 });
    }

    const { purchaseToken, productId } = body;

    if (!purchaseToken || typeof purchaseToken !== 'string') {
        return NextResponse.json({ error: 'purchaseToken é obrigatório' }, { status: 400 });
    }

    if (!productId || !VALID_PRODUCT_IDS.includes(productId)) {
        return NextResponse.json(
            { error: `productId inválido. Valores aceitos: ${VALID_PRODUCT_IDS.join(', ')}` },
            { status: 400 }
        );
    }

    // 3. Verificar token no Google Play
    let playSubscription;
    try {
        playSubscription = await getSubscriptionFromGooglePlay(purchaseToken, productId);
    } catch (err) {
        console.error('[assinaturas] Erro ao consultar Google Play API:', err.message);
        return NextResponse.json(
            { error: 'Não foi possível verificar a assinatura no Google Play' },
            { status: 502 }
        );
    }

    // 4. Mapear campos e salvar no Supabase
    const profileFields = mapPlaySubscriptionToProfile(playSubscription, productId);

    // Garantir que o purchaseToken do body seja salvo (o linkedPurchaseToken na resposta
    // refere-se a uma compra anterior encabeada; o token atual é o recebido do Flutter)
    profileFields.google_purchase_token = purchaseToken;

    const supabase = createAdminClient();
    const { data: updatedProfile, error: dbError } = await supabase
        .from('user_profiles')
        .update(profileFields)
        .eq('id', user.id)
        .select('id, is_pro, subscription_plan, subscription_expiry_date, auto_renewing, purchase_date')
        .single();

    if (dbError) {
        console.error('[assinaturas] Erro ao atualizar user_profiles:', dbError.message);
        return NextResponse.json({ error: 'Erro ao salvar assinatura' }, { status: 500 });
    }

    return NextResponse.json({ success: true, subscription: updatedProfile }, { status: 200 });
}
