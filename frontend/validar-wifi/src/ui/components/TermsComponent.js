import '../style/Terms.css';

const TermsComponent = () => {

  return (

    <div className="terms-box">
        <div className="terms-text">

            <h2>Termo de Serviço para Acesso Wi-Fi de Visitantes</h2><br />

            <p>Este Termo de Serviço ("Termo") estabelece os termos e condições para o uso do serviço de Wi-Fi 
              fornecido pela Fundação Hospital Centenário ("Instituição"). Ao acessar e utilizar o serviço de 
              Wi-Fi, o usuário concorda em cumprir este Termo, bem como todas as leis e regulamentações aplicáveis.
            </p><br />

            <p>1. Condições de Uso:</p>
            <p>1.1 Ao utilizar o Wi-Fi da Instituição, o usuário concorda em utilizar a rede de maneira ética, 
              legal e responsável, em conformidade com todas as leis aplicáveis.
            </p>
            <p>1.2 O acesso à rede Wi-Fi é fornecido exclusivamente para uso pessoal e não comercial. O usuário 
              concorda em não realizar atividades que possam prejudicar a integridade da rede, comprometer a 
              segurança ou violar a privacidade de outros usuários.
            </p><br />

            <p>2. Responsabilidade pelo Uso:</p>
            <p>2.1 A Fundação Hospital Centenário não se responsabiliza por qualquer conteúdo acessado ou 
              transmitido através da rede Wi-Fi, nem por eventuais danos causados ao dispositivo do usuário 
              durante o uso da rede.
            </p>
            <p>2.2 O usuário é responsável por manter a segurança de seus dispositivos, incluindo a proteção 
              contra vírus, malware e acesso não autorizado.
            </p><br />

            <p>3. Privacidade e Proteção de Dados:</p>
            <p>3.1 O usuário concorda que, ao utilizar o Wi-Fi da Instituição, informações como endereço IP, 
              histórico de navegação e dados de uso podem ser coletados para fins de segurança e análise de 
              desempenho da rede.
            </p>
            <p>3.2 A Instituição poderá utilizar o CPF da pessoa para identificação na rede, respeitando 
              integralmente a Lei Geral de Proteção de Dados (LGPD) e a política de privacidade da Instituição.
            </p><br />

            <p>4. Limitações de Serviço:</p>
            <p>4.1 A Instituição reserva-se o direito de interromper ou restringir o acesso ao Wi-Fi a qualquer 
              momento, por razões de manutenção, segurança ou qualquer outra necessidade operacional.
            </p>
            <p>4.2 A Instituição não garante a disponibilidade contínua, segurança ou desempenho do serviço de 
              Wi-Fi e não será responsável por interrupções ou falhas na prestação do serviço.
            </p><br />

            <p>5. Disposições Gerais:</p>
            <p>5.1 Este Termo pode ser alterado pela Instituição a qualquer momento, mediante aviso prévio.</p>
            <p>5.2 O não cumprimento deste Termo pode resultar na suspensão ou término do acesso ao Wi-Fi, sem 
              prejuízo de outras medidas cabíveis.
            </p><br />

            <p>Ao utilizar o Wi-Fi da Fundação Hospital Centenário, o usuário declara ter lido, compreendido e 
              concordado com os termos e condições estabelecidos neste Termo.
            </p>
            
            <div className="box-buttons">
              <button className="btn red-btn">Aceitar</button>
              <button className="btn gray-btn">Recusar</button>
            </div>
        </div>
    </div>

  )
}

export default TermsComponent