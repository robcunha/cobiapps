import { UserX } from 'lucide-react';
import LegalPage, { LegalSection, List, A } from '../_components/LegalPage';
import { CONTACT_EMAIL } from '../_components/config';

export const metadata = {
    title: "Excluir conta - Meus Filhos",
    description: "Como pedir a exclusão da sua conta do Meus Filhos e quais dados são apagados.",
};

const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Excluir conta - Meus Filhos')}`;

export default function ExcluirContaMeusFilhos() {
    return (
        <LegalPage
            icon={<UserX className="w-5 h-5" />}
            title="Excluir conta"
            intro="Você pode pedir a exclusão da sua conta do Meus Filhos e dos dados ligados a ela a qualquer momento. Veja abaixo como fazer e o que acontece com as suas informações."
        >
            <LegalSection title="1. Como pedir a exclusão">
                <List items={[
                    <>Envie um e-mail para <A href={mailto}>{CONTACT_EMAIL}</A>, de preferência a partir do mesmo e-mail usado na sua conta do Meus Filhos.</>,
                    <>Use o assunto <strong>&quot;Excluir conta - Meus Filhos&quot;</strong>.</>,
                    "No texto, informe o e-mail da conta que deseja excluir.",
                ]} />
                <p>Se o pedido vier de um e-mail diferente do cadastrado, podemos pedir uma confirmação para ter certeza de que a conta é sua. Vamos responder confirmando quando a exclusão for concluída.</p>
            </LegalSection>

            <LegalSection title="2. Quais dados são apagados">
                <List items={[
                    "os dados da sua conta (e-mail, nome e dados de login);",
                    "os perfis das crianças em que você é o responsável principal, com todos os eventos, documentos, fotos e memórias registrados nelas, inclusive os que foram adicionados por pessoas convidadas;",
                    "os convites e acessos que você deu a outras pessoas, que deixam de ver essas crianças;",
                    "o seu acesso às crianças de outros responsáveis que convidaram você.",
                ]} />
                <p><strong>Atenção:</strong> se você for o responsável principal e outras pessoas acompanham a criança, elas perdem o acesso a essas informações. Se quiser, avise-as antes ou peça que guardem os documentos importantes.</p>
            </LegalSection>

            <LegalSection title="3. Prazo">
                <p>Os dados são apagados em até 30 dias depois da confirmação do pedido. Cópias de segurança são eliminadas no ciclo normal de rotação dos backups.</p>
            </LegalSection>

            <LegalSection title="4. O que pode ser mantido">
                <p>Podemos manter apenas os dados que a lei obriga a guardar, pelo prazo que ela exige. Os registros de compra das assinaturas ficam com a App Store ou a Google Play, conforme as regras de cada loja.</p>
            </LegalSection>

            <LegalSection title="5. Assinatura Premium">
                <p>Excluir a conta <strong>não cancela</strong> a assinatura Premium. Para não ser cobrado de novo, cancele a assinatura nas configurações de assinaturas da App Store ou da Google Play antes de pedir a exclusão.</p>
            </LegalSection>

            <LegalSection title="6. Dúvidas">
                <p>Quer apagar só alguns dados, e não a conta inteira? Ou tem outra dúvida? Escreva para <A href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</A>. Saiba mais na <A href="/meus-filhos/privacidade">Política de Privacidade</A>.</p>
            </LegalSection>
        </LegalPage>
    );
}
