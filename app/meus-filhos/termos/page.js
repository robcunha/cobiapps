import { ScrollText } from 'lucide-react';
import LegalPage, { LegalSection, List, A } from '../_components/LegalPage';
import { CONTACT_EMAIL } from '../_components/config';

export const metadata = {
    title: "Termos de Uso - Meus Filhos",
    description: "Condições de uso do app Meus Filhos, incluindo as regras da assinatura Premium e da renovação automática.",
};

export default function TermosMeusFilhos() {
    return (
        <LegalPage
            icon={<ScrollText className="w-5 h-5" />}
            title="Termos de Uso"
            intro="Estes Termos de Uso definem as condições para usar o app Meus Filhos, desenvolvido pela Cobiapps. Leia com atenção. Ao criar uma conta ou usar o app, você concorda com eles."
        >
            <LegalSection title="1. O que é o Meus Filhos">
                <p>O Meus Filhos é um diário digital e uma agenda para organizar as informações dos seus filhos: saúde, escola, cursos, compromissos, documentos e memórias. O app permite compartilhar essas informações com outras pessoas da família.</p>
                <p>O Meus Filhos é uma ferramenta de organização. Ele não substitui a orientação de médicos, escolas ou outros profissionais, e não dá conselhos médicos.</p>
            </LegalSection>

            <LegalSection title="2. Quem pode usar">
                <p>O app é destinado a maiores de 18 anos. Ao cadastrar uma criança, você declara que é responsável por ela ou que tem autorização de quem é para registrar as informações dela.</p>
            </LegalSection>

            <LegalSection title="3. Sua conta">
                <p>Você pode criar uma conta com e-mail e senha ou entrar com o Google. Você é responsável por manter os seus dados de acesso em segurança e por tudo o que for feito na sua conta.</p>
                <p>Se perceber qualquer uso não autorizado, avise a gente pelo e-mail <A href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</A>.</p>
            </LegalSection>

            <LegalSection title="4. Compartilhamento com outras pessoas">
                <p>O responsável principal de uma criança pode convidar outras pessoas por e-mail para acompanhá-la. Os convidados podem ver e adicionar informações sobre essa criança. Só o responsável principal pode convidar ou remover pessoas.</p>
                <p>Você é responsável por escolher com quem compartilha as informações. Convide apenas pessoas de sua confiança.</p>
            </LegalSection>

            <LegalSection title="5. Seu conteúdo">
                <p>As informações, documentos e fotos que você coloca no app continuam sendo seus. Você nos autoriza a armazená-los, processá-los e exibi-los para você e para as pessoas que você convidar, apenas para fazer o app funcionar.</p>
                <p>Você se compromete a não enviar conteúdo ilegal, ofensivo ou que viole direitos de terceiros. Recomendamos manter cópias dos documentos importantes também fora do app.</p>
            </LegalSection>

            <LegalSection title="6. Uso permitido">
                <p>Não é permitido:</p>
                <List items={[
                    "usar o app para fins ilegais ou que prejudiquem outras pessoas;",
                    "tentar acessar contas, dados ou partes do sistema sem autorização;",
                    "copiar, modificar, distribuir ou fazer engenharia reversa do app;",
                    "usar meios automatizados para sobrecarregar ou atrapalhar o serviço.",
                ]} />
                <p>Podemos suspender ou encerrar contas que descumpram estes Termos.</p>
            </LegalSection>

            <LegalSection title="7. Planos">
                <p><strong>Grátis:</strong> 1 criança, até 2 pessoas por criança e até 30 documentos, com anúncios.</p>
                <p><strong>Premium:</strong> sem anúncios, quantas crianças quiser, até 5 pessoas por criança, documentos sem limite e novos recursos Premium conforme forem lançados.</p>
                <p>Os recursos e limites de cada plano podem mudar com o tempo. Mudanças relevantes serão informadas no app ou nesta página.</p>
            </LegalSection>

            <LegalSection title="8. Assinatura Premium e renovação automática">
                <List items={[
                    "O Premium é oferecido em assinatura mensal ou anual, comprada pela App Store (iPhone) ou pela Google Play (Android). O preço aparece na loja antes da compra e pode variar por loja e por país.",
                    "O pagamento é cobrado na sua conta da loja quando você confirma a compra.",
                    "A assinatura renova automaticamente ao fim de cada período, pelo mesmo prazo, a menos que você cancele pelo menos 24 horas antes do fim do período atual.",
                    "A cobrança da renovação é feita nas 24 horas anteriores ao fim do período atual.",
                    "Você pode cancelar ou gerenciar a assinatura a qualquer momento nas configurações de assinaturas da loja. O cancelamento evita a próxima renovação, e o Premium continua ativo até o fim do período já pago.",
                    "Se houver período de teste grátis, a cobrança começa automaticamente ao fim do teste, a menos que você cancele antes. Qualquer parte não usada do teste é perdida ao assinar.",
                    "Pedidos de reembolso seguem as regras da loja onde a compra foi feita (Apple ou Google).",
                    "Excluir o app ou a sua conta não cancela a assinatura. Cancele também pela loja.",
                ]} />
                <p>Quando a assinatura termina, os limites do plano Grátis voltam a valer para a sua conta.</p>
            </LegalSection>

            <LegalSection title="9. Anúncios">
                <p>No plano Grátis, o app exibe anúncios de terceiros. Não nos responsabilizamos pelo conteúdo, produtos ou serviços anunciados. Saiba mais na <A href="/meus-filhos/privacidade">Política de Privacidade</A>.</p>
            </LegalSection>

            <LegalSection title="10. Privacidade">
                <p>O tratamento dos seus dados e dos dados dos seus filhos segue a nossa <A href="/meus-filhos/privacidade">Política de Privacidade</A>, que faz parte destes Termos.</p>
            </LegalSection>

            <LegalSection title="11. Disponibilidade e responsabilidade">
                <p>Trabalhamos para manter o app funcionando bem, mas ele é oferecido &quot;no estado em que se encontra&quot;. Podem acontecer interrupções, falhas ou atualizações, e não garantimos que o serviço estará sempre disponível ou livre de erros.</p>
                <p>Na máxima extensão permitida pela lei, a Cobiapps não se responsabiliza por danos indiretos ou por perda de dados decorrentes do uso ou da impossibilidade de uso do app. Nada nestes Termos limita os direitos que você tem pelo Código de Defesa do Consumidor.</p>
            </LegalSection>

            <LegalSection title="12. Encerramento da conta">
                <p>Você pode pedir a exclusão da sua conta a qualquer momento. Veja como na página <A href="/meus-filhos/excluir-conta">Excluir conta</A>.</p>
            </LegalSection>

            <LegalSection title="13. Alterações nestes Termos">
                <p>Podemos atualizar estes Termos. Quando houver mudanças relevantes, atualizaremos esta página e a data no topo. Continuar usando o app depois das mudanças significa que você concorda com a nova versão.</p>
            </LegalSection>

            <LegalSection title="14. Lei aplicável e foro">
                <p>Estes Termos seguem as leis do Brasil. Fica eleito o foro da comarca do Rio de Janeiro, Estado do Rio de Janeiro, ressalvado o direito do consumidor de propor ações no foro do seu domicílio.</p>
            </LegalSection>

            <LegalSection title="15. Contato">
                <p>Dúvidas sobre estes Termos? Escreva para <A href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</A>.</p>
            </LegalSection>
        </LegalPage>
    );
}
