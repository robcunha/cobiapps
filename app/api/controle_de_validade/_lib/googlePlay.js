import { google } from 'googleapis';

/**
 * Retorna um cliente autenticado do androidpublisher
 * usando a service account configurada em GOOGLE_SERVICE_ACCOUNT_JSON.
 */
function getAndroidPublisher() {
    const serviceAccountJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
    if (!serviceAccountJson) {
        throw new Error('GOOGLE_SERVICE_ACCOUNT_JSON não configurado');
    }

    const credentials = JSON.parse(serviceAccountJson);

    const auth = new google.auth.GoogleAuth({
        credentials,
        scopes: ['https://www.googleapis.com/auth/androidpublisher'],
    });

    return google.androidpublisher({ version: 'v3', auth });
}

/**
 * Consulta o estado atual de uma assinatura no Google Play.
 *
 * @param {string} purchaseToken - Token de compra do Google Play
 * @param {string} productId - ID do produto (ex: 'controle_de_validade_starter')
 * @returns {Promise<object>} Resposta da API subscriptionsv2
 *
 * Campos relevantes na resposta:
 *   - subscriptionState: 'SUBSCRIPTION_STATE_ACTIVE' | 'SUBSCRIPTION_STATE_CANCELED' | 'SUBSCRIPTION_STATE_EXPIRED' | ...
 *   - startTime: ISO8601
 *   - latestOrderId: string
 *   - lineItems[0].expiryTime: ISO8601
 *   - lineItems[0].autoRenewingPlan.autoRenewEnabled: boolean
 */
export async function getSubscriptionFromGooglePlay(purchaseToken, productId) {
    const packageName = process.env.GOOGLE_PLAY_PACKAGE_NAME;
    if (!packageName) {
        throw new Error('GOOGLE_PLAY_PACKAGE_NAME não configurado');
    }

    const publisher = getAndroidPublisher();

    const response = await publisher.purchases.subscriptionsv2.get({
        packageName,
        token: purchaseToken,
    });

    return response.data;
}

/**
 * Mapeia os dados da Google Play API para os campos de user_profiles no Supabase.
 *
 * @param {object} playSubscription - Resposta de getSubscriptionFromGooglePlay
 * @param {string} productId - ID do produto
 * @returns {object} Campos prontos para UPDATE em user_profiles
 */
export function mapPlaySubscriptionToProfile(playSubscription, productId) {
    const lineItem = playSubscription.lineItems?.[0];
    const state = playSubscription.subscriptionState ?? '';

    const isActive =
        state === 'SUBSCRIPTION_STATE_ACTIVE' ||
        state === 'SUBSCRIPTION_STATE_IN_GRACE_PERIOD';

    const isCanceled = state === 'SUBSCRIPTION_STATE_CANCELED';
    const isExpiredOrRevoked =
        state === 'SUBSCRIPTION_STATE_EXPIRED' ||
        state === 'SUBSCRIPTION_STATE_PAUSED';

    const autoRenewing = lineItem?.autoRenewingPlan?.autoRenewEnabled ?? false;

    const fields = {
        updated_at: new Date().toISOString(),
        google_purchase_token: playSubscription.linkedPurchaseToken ?? undefined,
        google_order_id: playSubscription.latestOrderId ?? undefined,
        subscription_expiry_date: lineItem?.expiryTime ?? undefined,
        auto_renewing: autoRenewing,
        purchase_platform: 'android',
        subscription_source: 'google_play',
    };

    if (isActive) {
        fields.is_pro = true;
        fields.subscription_plan = productId;
        if (playSubscription.startTime) {
            fields.purchase_date = playSubscription.startTime;
            fields.subscription_start_date = playSubscription.startTime;
        }
    } else if (isCanceled) {
        // Ainda ativo até a data de expiração, mas não vai renovar
        fields.auto_renewing = false;
    } else if (isExpiredOrRevoked) {
        fields.is_pro = false;
        fields.auto_renewing = false;
    }

    // Remove campos undefined para não sobrescrever dados existentes sem necessidade
    return Object.fromEntries(Object.entries(fields).filter(([, v]) => v !== undefined));
}
