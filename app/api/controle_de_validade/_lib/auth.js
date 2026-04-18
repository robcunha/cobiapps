import { createUserClient } from './supabase.js';

/**
 * Extrai o JWT do header Authorization: Bearer <token>.
 * Retorna null se o header estiver ausente ou malformado.
 */
export function extractJwt(request) {
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return null;
    }
    return authHeader.slice(7).trim() || null;
}

/**
 * Verifica o JWT com o Supabase e retorna o usuário autenticado.
 * Retorna { user, error }.
 */
export async function getUserFromJwt(jwt) {
    const client = createUserClient(jwt);
    const { data, error } = await client.auth.getUser();
    if (error || !data?.user) {
        return { user: null, error: error?.message ?? 'Invalid token' };
    }
    return { user: data.user, error: null };
}

/**
 * Verifica o token OIDC enviado pelo Google Pub/Sub no header Authorization.
 * O Google assina o token com RS256 e inclui o campo "audience" configurável.
 * Retorna true se válido, false caso contrário.
 *
 * Verificação feita contra a chave pública do Google:
 * https://www.googleapis.com/oauth2/v3/certs
 */
export async function verifyPubSubToken(request) {
    const audience = process.env.GOOGLE_PUBSUB_AUDIENCE;
    const authHeader = request.headers.get('Authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return false;
    }

    const token = authHeader.slice(7).trim();

    try {
        // Busca as chaves públicas do Google
        const certsResponse = await fetch('https://www.googleapis.com/oauth2/v3/certs');
        if (!certsResponse.ok) return false;
        const { keys } = await certsResponse.json();

        // Decodifica o header do JWT para identificar qual chave usar (kid)
        const [headerB64] = token.split('.');
        const header = JSON.parse(Buffer.from(headerB64, 'base64url').toString());

        const jwk = keys.find((k) => k.kid === header.kid);
        if (!jwk) return false;

        // Importa a chave pública do Google
        const publicKey = await crypto.subtle.importKey(
            'jwk',
            jwk,
            { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
            false,
            ['verify']
        );

        // Verifica a assinatura
        const [, payloadB64, signatureB64] = token.split('.');
        const data = new TextEncoder().encode(`${headerB64}.${payloadB64}`);
        const signature = Buffer.from(signatureB64, 'base64url');

        const isValid = await crypto.subtle.verify('RSASSA-PKCS1-v1_5', publicKey, signature, data);
        if (!isValid) return false;

        // Valida payload: audience, issuer e expiração
        const payload = JSON.parse(Buffer.from(payloadB64, 'base64url').toString());
        const now = Math.floor(Date.now() / 1000);

        if (payload.aud !== audience) return false;
        if (payload.iss !== 'https://accounts.google.com') return false;
        if (payload.exp && payload.exp < now) return false;

        return true;
    } catch {
        return false;
    }
}
