import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

/**
 * Client com service role key — ignora RLS.
 * Usar para operações de assinatura (webhook não tem JWT de usuário).
 */
export function createAdminClient() {
    return createClient(supabaseUrl, supabaseServiceRoleKey, {
        auth: {
            autoRefreshToken: false,
            persistSession: false,
        },
    });
}

/**
 * Client com JWT do usuário — respeita RLS.
 * Usar quando o usuário está autenticado e tem um JWT válido.
 */
export function createUserClient(jwt) {
    return createClient(supabaseUrl, supabaseAnonKey, {
        global: {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        },
        auth: {
            autoRefreshToken: false,
            persistSession: false,
        },
    });
}
