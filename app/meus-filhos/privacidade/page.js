import { Shield } from 'lucide-react';
import LegalPage, { LegalSection, List, A } from '../_components/LegalPage';
import { CONTACT_EMAIL } from '../_components/config';

export const metadata = {
    title: "Política de Privacidade - Meus Filhos",
    description: "Como o app Meus Filhos coleta, usa, compartilha e protege os seus dados e os dados dos seus filhos.",
};

export default function PrivacidadeMeusFilhos() {
    return (
        <LegalPage
            icon={<Shield className="w-5 h-5" />}
            title="Política de Privacidade"
            intro="Esta política explica quais dados o app Meus Filhos coleta, para que eles são usados, com quem são compartilhados e quais são os seus direitos. Ela vale apenas para o Meus Filhos e segue a Lei Geral de Proteção de Dados (LGPD, Lei nº 13.709/2018)."
        >
            <LegalSection title="1. Quem somos">
                <p>O Meus Filhos é desenvolvido pela Cobiapps, que é a controladora dos dados tratados no app. Para qualquer assunto sobre privacidade, inclusive para exercer os seus direitos, fale com a gente pelo e-mail <A href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</A>.</p>
            </LegalSection>

            <LegalSection title="2. Quais dados coletamos">
                <p><strong>Dados da sua conta:</strong></p>
                <List items={[
                    "e-mail e senha (a senha é guardada de forma protegida, e não temos acesso a ela);",
                    "se você entrar com o Google: nome, e-mail e foto de perfil fornecidos pela sua conta Google.",
                ]} />
                <p><strong>Dados das crianças que você cadastra:</strong></p>
                <List items={[
                    "nome, data de nascimento, tipo sanguíneo, alergias, altura e peso;",
                    "escola, pediatra e responsáveis;",
                    "eventos que você registra (saúde, escola, cursos, compromissos, memórias, notas e lembretes);",
                    "documentos (PDFs e imagens, como receitas, exames e carteira de vacinação) e fotos.",
                ]} />
                <p><strong>Dados de compartilhamento:</strong> o e-mail das pessoas que você convida para acompanhar uma criança.</p>
                <p><strong>Dados de assinatura:</strong> se você assinar o Premium, recebemos a informação de que a assinatura está ativa e o tipo de plano. Não recebemos os dados do seu cartão ou de pagamento, que ficam com a App Store ou a Google Play.</p>
                <p><strong>Dados de publicidade:</strong> no plano Grátis, o app exibe anúncios do Google AdMob, que pode coletar o identificador de publicidade do aparelho e dados técnicos (como modelo do aparelho, sistema operacional e endereço IP) para exibir e medir anúncios.</p>
            </LegalSection>

            <LegalSection title="3. Dados de crianças">
                <p>O Meus Filhos é feito para ser usado por adultos: mães, pais e responsáveis. As informações das crianças são cadastradas por você, como responsável, e são tratadas no melhor interesse delas, conforme o artigo 14 da LGPD.</p>
                <p>Usamos esses dados apenas para que o app funcione: mostrar, organizar e sincronizar as informações para você e para as pessoas que você convidar. Não usamos os dados das crianças para publicidade e não os vendemos.</p>
                <p>Ao cadastrar uma criança, você declara que é responsável por ela ou que tem autorização de quem é.</p>
            </LegalSection>

            <LegalSection title="4. Para que usamos os dados">
                <List items={[
                    "criar e manter a sua conta e permitir o login;",
                    "guardar e sincronizar as informações entre os seus aparelhos e com as pessoas que você convidou;",
                    "enviar os convites de compartilhamento;",
                    "liberar os recursos do Premium e aplicar os limites de cada plano;",
                    "exibir anúncios no plano Grátis;",
                    "responder aos seus contatos e pedidos;",
                    "cumprir obrigações legais.",
                ]} />
                <p>As bases legais para esses usos são a execução do contrato com você (os Termos de Uso), o consentimento, quando aplicável, o cumprimento de obrigação legal e o legítimo interesse, sempre respeitando os seus direitos.</p>
            </LegalSection>

            <LegalSection title="5. Serviços de terceiros que usamos">
                <p>Para o app funcionar, contamos com alguns fornecedores, que tratam os dados em nosso nome ou para prestar o serviço contratado:</p>
                <List items={[
                    <><strong>Supabase:</strong> armazenamento dos dados e dos arquivos na nuvem e autenticação da conta.</>,
                    <><strong>Google (Login com Google):</strong> quando você escolhe &quot;Continuar com Google&quot;.</>,
                    <><strong>Google AdMob:</strong> exibição de anúncios no plano Grátis.</>,
                    <><strong>Apple (App Store), Google (Google Play) e RevenueCat:</strong> processamento e gestão das assinaturas Premium.</>,
                ]} />
                <p>Cada um desses serviços tem a sua própria política de privacidade. Alguns deles podem armazenar dados em servidores fora do Brasil. Nesses casos, a transferência internacional é feita conforme o que a LGPD permite.</p>
            </LegalSection>

            <LegalSection title="6. Compartilhamento com pessoas que você convida">
                <p>Quando você convida alguém para acompanhar uma criança, essa pessoa passa a ver as informações dessa criança (perfil, eventos, documentos e memórias) e pode adicionar novas informações. Esse compartilhamento acontece por decisão sua.</p>
                <p>Só o responsável principal pode convidar ou remover pessoas. Ao remover alguém, essa pessoa deixa de ter acesso às informações da criança.</p>
                <p>Fora isso, não vendemos nem compartilhamos os seus dados com terceiros, exceto com os fornecedores listados acima ou quando exigido por lei ou ordem judicial.</p>
            </LegalSection>

            <LegalSection title="7. Por quanto tempo guardamos os dados">
                <p>Guardamos os dados enquanto a sua conta estiver ativa. Se você pedir a exclusão da conta, os dados são apagados conforme descrito na página <A href="/meus-filhos/excluir-conta">Excluir conta</A>, exceto o que precisarmos manter para cumprir obrigações legais.</p>
            </LegalSection>

            <LegalSection title="8. Segurança">
                <p>Adotamos medidas técnicas e organizacionais razoáveis para proteger os seus dados, como comunicação criptografada entre o app e os servidores e regras de acesso que limitam cada informação às pessoas autorizadas.</p>
                <p>Nenhum sistema é totalmente imune a falhas. Se acontecer um incidente de segurança que possa trazer risco relevante a você, avisaremos os afetados e a Autoridade Nacional de Proteção de Dados (ANPD), conforme a lei.</p>
            </LegalSection>

            <LegalSection title="9. Seus direitos (LGPD)">
                <p>Como titular dos dados, ou como responsável pelos dados da criança, você pode pedir a qualquer momento:</p>
                <List items={[
                    "confirmação de que tratamos os seus dados e acesso a eles;",
                    "correção de dados incompletos, inexatos ou desatualizados;",
                    "anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desacordo com a lei;",
                    "portabilidade dos dados a outro fornecedor;",
                    "eliminação dos dados tratados com base no seu consentimento;",
                    "informação sobre com quem compartilhamos os seus dados;",
                    "informação sobre a possibilidade de não dar consentimento e as consequências disso;",
                    "revogação do consentimento.",
                ]} />
                <p>Para exercer qualquer um desses direitos, escreva para <A href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</A>. Você também pode reclamar à ANPD.</p>
            </LegalSection>

            <LegalSection title="10. Anúncios e identificador de publicidade">
                <p>Você pode limitar o uso do identificador de publicidade nas configurações do seu aparelho (no iPhone, em Privacidade e Segurança &gt; Rastreamento; no Android, em Configurações &gt; Google &gt; Anúncios). Assinantes Premium não veem anúncios.</p>
            </LegalSection>

            <LegalSection title="11. Alterações nesta política">
                <p>Podemos atualizar esta política de tempos em tempos. Quando houver mudanças relevantes, atualizaremos esta página e a data no topo. Recomendamos consultá-la periodicamente.</p>
            </LegalSection>

            <LegalSection title="12. Contato">
                <p>Dúvidas sobre esta política ou sobre os seus dados? Escreva para <A href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</A>.</p>
            </LegalSection>
        </LegalPage>
    );
}
