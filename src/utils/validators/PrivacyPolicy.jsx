import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Política de Privacidade</h1>

      <p className="mb-6 text-lg">
        Bem-vindo à Holodeck. Nós valorizamos sua privacidade e estamos comprometidos em proteger suas informações pessoais.
        Esta Política de Privacidade descreve como coletamos, usamos, divulgamos e protegemos suas informações ao utilizar
        nossos serviços, seja em nosso site, aplicativos ou outros produtos e serviços relacionados.
      </p>

      {/* Versão para dispositivos móveis */}
      <div className="block md:hidden">
        <ul className="space-y-4">
          <li>
            <h2 className="text-2xl font-semibold mb-2">1. Informações Coletadas</h2>
            <div className="text-lg">
              Coletamos diferentes tipos de informações sobre você, conforme descrito abaixo:
              <ul className="list-disc list-inside pl-6 mt-2">
                <li><strong>Informações Pessoais:</strong> Dados que você nos fornece diretamente, como nome, e-mail, endereço, e número de telefone.</li>
                <li><strong>Informações de Navegação:</strong> Dados coletados automaticamente quando você visita nossos sites ou usa nossos aplicativos, como endereço IP, tipo de navegador, e páginas visitadas.</li>
                <li><strong>Informações de Uso:</strong> Dados relacionados ao uso dos nossos serviços, incluindo interações e preferências.</li>
                <li><strong>Dados de Transações:</strong> Informações sobre compras, assinaturas ou outras transações realizadas através de nossos serviços.</li>
                <li><strong>Informações de Terceiros:</strong> Dados coletados de parceiros e fornecedores, quando necessário para fornecer nossos serviços.</li>
              </ul>
            </div>
          </li>
          <li>
            <h2 className="text-2xl font-semibold mb-2">2. Como Coletamos Seus Dados</h2>
            <div className="text-lg">
              Coletamos dados de várias maneiras, incluindo:
              <ul className="list-disc list-inside pl-6 mt-2">
                <li><strong>Cadastro e Conta:</strong> Quando você cria uma conta ou se cadastra em nossos serviços, fornecendo informações pessoais.</li>
                <li><strong>Formulários e Pesquisas:</strong> Informações que você fornece ao preencher formulários ou participar de pesquisas.</li>
                <li><strong>Uso de Serviços:</strong> Dados coletados automaticamente durante o uso dos nossos serviços, como cookies e tecnologias semelhantes.</li>
                <li><strong>Terceiros:</strong> Dados recebidos de terceiros, como parceiros de negócios e prestadores de serviços.</li>
              </ul>
            </div>
          </li>
          <li>
            <h2 className="text-2xl font-semibold mb-2">3. Como Usamos Seus Dados</h2>
            <div className="text-lg">
              Utilizamos suas informações pessoais para as seguintes finalidades:
              <ul className="list-disc list-inside pl-6 mt-2">
                <li><strong>Fornecimento e Melhoria de Serviços:</strong> Para operar, manter e melhorar nossos serviços, incluindo personalização e aprimoramento da experiência do usuário.</li>
                <li><strong>Comunicações:</strong> Para enviar atualizações, notificações e outras informações relacionadas aos nossos serviços.</li>
                <li><strong>Segurança e Proteção:</strong> Para proteger nossos sistemas e usuários contra fraudes e atividades ilegais.</li>
                <li><strong>Cumprimento Legal:</strong> Para cumprir com obrigações legais e regulatórias, e defender nossos direitos em processos legais.</li>
                <li><strong>Desenvolvimento de Produtos:</strong> Para realizar análises e desenvolver novos produtos e serviços.</li>
                <li><strong>Marketing e Publicidade:</strong> Para enviar ofertas promocionais e campanhas publicitárias relevantes, com base nas suas preferências.</li>
              </ul>
            </div>
          </li>
          <li>
            <h2 className="text-2xl font-semibold mb-2">4. Compartilhamento de Dados</h2>
            <div className="text-lg">
              Podemos compartilhar suas informações pessoais com:
              <ul className="list-disc list-inside pl-6 mt-2">
                <li><strong>Parceiros de Negócios:</strong> Terceiros que prestam serviços em nosso nome, como provedores de pagamentos e serviços de suporte.</li>
                <li><strong>Autoridades Legais:</strong> Quando necessário para cumprir leis, regulamentos ou responder a solicitações legais.</li>
                <li><strong>Outras Entidades:</strong> Em caso de fusão, aquisição ou reestruturação de nossos negócios.</li>
              </ul>
            </div>
          </li>
          <li>
            <h2 className="text-2xl font-semibold mb-2">5. Cookies e Tecnologias Similares</h2>
            <div className="text-lg">
              Utilizamos cookies e tecnologias semelhantes para:
              <ul className="list-disc list-inside pl-6 mt-2">
                <li><strong>Melhorar a Experiência:</strong> Para personalizar e otimizar sua experiência de navegação.</li>
                <li><strong>Análise:</strong> Para coletar dados sobre como nossos serviços são utilizados e melhorar nosso desempenho.</li>
                <li><strong>Publicidade:</strong> Para exibir anúncios personalizados com base nas suas preferências e comportamento.</li>
              </ul>
              Você pode ajustar as configurações de cookies no seu navegador para controlar o uso desses dados.
            </div>
          </li>
          <li>
            <h2 className="text-2xl font-semibold mb-2">6. Segurança das Informações</h2>
            <div className="text-lg">
              Implementamos medidas de segurança adequadas para proteger suas informações pessoais contra acesso não autorizado,
              uso indevido, divulgação e destruição. No entanto, nenhuma transmissão de dados pela internet ou armazenamento eletrônico
              é completamente seguro, e não podemos garantir a segurança absoluta das informações.
            </div>
          </li>
          <li>
            <h2 className="text-2xl font-semibold mb-2">7. Seus Direitos</h2>
            <div className="text-lg">
              Você tem o direito de acessar, corrigir, ou excluir suas informações pessoais. Para exercer esses direitos, entre
              em contato conosco através dos canais abaixo. Além disso, você pode solicitar informações sobre a forma como seus
              dados são tratados e solicitar a portabilidade dos mesmos.
            </div>
          </li>
          <li>
            <h2 className="text-2xl font-semibold mb-2">8. Alterações a Esta Política</h2>
            <div className="text-lg">
              Esta Política de Privacidade pode ser atualizada periodicamente. Notificaremos sobre quaisquer alterações significativas
              por meio dos nossos canais de comunicação. Recomendamos que você revise esta política regularmente para se manter
              informado sobre como protegemos suas informações.
            </div>
          </li>
          <li>
            <h2 className="text-2xl font-semibold mb-2">9. Contato</h2>
            <div className="text-lg">
              Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade ou sobre o tratamento de seus dados pessoais,
              entre em contato conosco através do e-mail: suporte@sto.com ou pelo formulário de contato disponível em nosso site.
            </div>
          </li>
          <li>
            <h2 className="text-2xl font-semibold mb-2">10. Dados Anonimizados</h2>
            <div className="text-lg">
              Podemos utilizar dados anonimizados para fins de análise e melhoria de nossos serviços, garantindo que tais dados
              não possam ser utilizados para identificar indivíduos.
            </div>
          </li>
        </ul>
      </div>

      {/* Versão para dispositivos maiores */}
      <div className="hidden md:block">
        <div className="overflow-x-auto">
          <table className="w-full text-left bg-white border border-gray-200 rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="p-4 text-lg font-semibold">Seção</th>
                <th className="p-4 text-lg font-semibold">Descrição</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4 font-semibold">1. Informações Coletadas</td>
                <td className="p-4">
                  Coletamos diferentes tipos de informações sobre você, conforme descrito abaixo:
                  <ul className="list-disc list-inside pl-6 mt-2">
                    <li><strong>Informações Pessoais:</strong> Dados que você nos fornece diretamente, como nome, e-mail, endereço, e número de telefone.</li>
                    <li><strong>Informações de Navegação:</strong> Dados coletados automaticamente quando você visita nossos sites ou usa nossos aplicativos, como endereço IP, tipo de navegador, e páginas visitadas.</li>
                    <li><strong>Informações de Uso:</strong> Dados relacionados ao uso dos nossos serviços, incluindo interações e preferências.</li>
                    <li><strong>Dados de Transações:</strong> Informações sobre compras, assinaturas ou outras transações realizadas através de nossos serviços.</li>
                    <li><strong>Informações de Terceiros:</strong> Dados coletados de parceiros e fornecedores, quando necessário para fornecer nossos serviços.</li>
                  </ul>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold">2. Como Coletamos Seus Dados</td>
                <td className="p-4">
                  Coletamos dados de várias maneiras, incluindo:
                  <ul className="list-disc list-inside pl-6 mt-2">
                    <li><strong>Cadastro e Conta:</strong> Quando você cria uma conta ou se cadastra em nossos serviços, fornecendo informações pessoais.</li>
                    <li><strong>Formulários e Pesquisas:</strong> Informações que você fornece ao preencher formulários ou participar de pesquisas.</li>
                    <li><strong>Uso de Serviços:</strong> Dados coletados automaticamente durante o uso dos nossos serviços, como cookies e tecnologias semelhantes.</li>
                    <li><strong>Terceiros:</strong> Dados recebidos de terceiros, como parceiros de negócios e prestadores de serviços.</li>
                  </ul>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold">3. Como Usamos Seus Dados</td>
                <td className="p-4">
                  Utilizamos suas informações pessoais para as seguintes finalidades:
                  <ul className="list-disc list-inside pl-6 mt-2">
                    <li><strong>Fornecimento e Melhoria de Serviços:</strong> Para operar, manter e melhorar nossos serviços, incluindo personalização e aprimoramento da experiência do usuário.</li>
                    <li><strong>Comunicações:</strong> Para enviar atualizações, notificações e outras informações relacionadas aos nossos serviços.</li>
                    <li><strong>Segurança e Proteção:</strong> Para proteger nossos sistemas e usuários contra fraudes e atividades ilegais.</li>
                    <li><strong>Cumprimento Legal:</strong> Para cumprir com obrigações legais e regulatórias, e defender nossos direitos em processos legais.</li>
                    <li><strong>Desenvolvimento de Produtos:</strong> Para realizar análises e desenvolver novos produtos e serviços.</li>
                    <li><strong>Marketing e Publicidade:</strong> Para enviar ofertas promocionais e campanhas publicitárias relevantes, com base nas suas preferências.</li>
                  </ul>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold">4. Compartilhamento de Dados</td>
                <td className="p-4">
                  Podemos compartilhar suas informações pessoais com:
                  <ul className="list-disc list-inside pl-6 mt-2">
                    <li><strong>Parceiros de Negócios:</strong> Terceiros que prestam serviços em nosso nome, como provedores de pagamentos e serviços de suporte.</li>
                    <li><strong>Autoridades Legais:</strong> Quando necessário para cumprir leis, regulamentos ou responder a solicitações legais.</li>
                    <li><strong>Outras Entidades:</strong> Em caso de fusão, aquisição ou reestruturação de nossos negócios.</li>
                  </ul>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold">5. Cookies e Tecnologias Similares</td>
                <td className="p-4">
                  Utilizamos cookies e tecnologias semelhantes para:
                  <ul className="list-disc list-inside pl-6 mt-2">
                    <li><strong>Melhorar a Experiência:</strong> Para personalizar e otimizar sua experiência de navegação.</li>
                    <li><strong>Análise:</strong> Para coletar dados sobre como nossos serviços são utilizados e melhorar nosso desempenho.</li>
                    <li><strong>Publicidade:</strong> Para exibir anúncios personalizados com base nas suas preferências e comportamento.</li>
                  </ul>
                  Você pode ajustar as configurações de cookies no seu navegador para controlar o uso desses dados.
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold">6. Segurança das Informações</td>
                <td className="p-4">
                  Implementamos medidas de segurança adequadas para proteger suas informações pessoais contra acesso não autorizado,
                  uso indevido, divulgação e destruição. No entanto, nenhuma transmissão de dados pela internet ou armazenamento eletrônico
                  é completamente seguro, e não podemos garantir a segurança absoluta das informações.
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold">7. Seus Direitos</td>
                <td className="p-4">
                  Você tem o direito de acessar, corrigir, ou excluir suas informações pessoais. Para exercer esses direitos, entre
                  em contato conosco através dos canais abaixo. Além disso, você pode solicitar informações sobre a forma como seus
                  dados são tratados e solicitar a portabilidade dos mesmos.
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold">8. Alterações a Esta Política</td>
                <td className="p-4">
                  Esta Política de Privacidade pode ser atualizada periodicamente. Notificaremos sobre quaisquer alterações significativas
                  por meio dos nossos canais de comunicação. Recomendamos que você revise esta política regularmente para se manter
                  informado sobre como protegemos suas informações.
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold">9. Contato</td>
                <td className="p-4">
                  Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade ou sobre o tratamento de seus dados pessoais,
                  entre em contato conosco através do e-mail: suporte@sto.com ou pelo formulário de contato disponível em nosso site.
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold">10. Dados Anonimizados</td>
                <td className="p-4">
                  Podemos utilizar dados anonimizados para fins de análise e melhoria de nossos serviços, garantindo que tais dados
                  não possam ser utilizados para identificar indivíduos.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
