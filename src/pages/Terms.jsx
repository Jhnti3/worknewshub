// export default function Terms() {
//   return (
//     <div style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
//       <h1>Termos de Uso</h1>

//       <p>
//         Ao utilizar o WorkNewsHub, você concorda com os termos descritos abaixo.
//       </p>

//       <h2>1. Uso do site</h2>
//       <p>
//         O conteúdo disponibilizado é apenas informativo e pode ser atualizado a qualquer momento.
//       </p>

//       <h2>2. Propriedade intelectual</h2>
//       <p>
//         Todo o conteúdo do site é protegido e não pode ser copiado sem autorização.
//       </p>

//       <h2>3. Responsabilidade</h2>
//       <p>
//         Não nos responsabilizamos por decisões tomadas com base nas informações do site.
//       </p>

//       <h2>4. Alterações</h2>
//       <p>
//         Estes termos podem ser alterados sem aviso prévio.
//       </p>
//     </div>
//   );
// }

export default function Terms() {
  return (
    <div
      style={{
        padding: "40px 20px",
        maxWidth: "900px",
        margin: "0 auto",
        color: "#1a1a1a",
        lineHeight: "1.6",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "10px" }}>
        Termos de Uso
      </h1>

      <p style={{ fontSize: "1.1rem", marginBottom: "20px" }}>
        Estes Termos de Uso regem o acesso e utilização do worknewshub.
      </p>

      <Section title="1. Uso de Licença">
        <p>
          É concedida permissão para uso temporário dos materiais apenas para visualização pessoal e não comercial.
        </p>

        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Não modificar ou copiar materiais;</li>
          <li>Não usar para fins comerciais;</li>
          <li>Não fazer engenharia reversa;</li>
          <li>Não remover direitos autorais;</li>
          <li>Não redistribuir ou espelhar conteúdo.</li>
        </ul>

        <p style={{ marginTop: "10px" }}>
          Esta licença pode ser revogada a qualquer momento em caso de violação.
        </p>
      </Section>

      <Section title="2. LGPD">
        <p>
          Tratamos dados pessoais conforme a Lei Geral de Proteção de Dados (LGPD).
        </p>

        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Finalidade: operação e melhoria do site;</li>
          <li>Bases legais: consentimento, contrato e obrigação legal;</li>
          <li>Compartilhamento com parceiros técnicos quando necessário;</li>
          <li>Direitos do usuário conforme LGPD;</li>
          <li>Medidas de segurança e retenção de dados.</li>
        </ul>
      </Section>

      <Section title="3. Lei aplicável">
        Aplica-se a legislação brasileira. Foro de Rio de Janeiro/RJ
      </Section>

      <Section title="4. Contato">
        E-mail: worknewshub@contato.com <br />
        DPO: worknewshub@contato.com
      </Section>

      <p style={{ marginTop: "30px", fontSize: "0.85rem", opacity: 0.7 }}>
        © worknewshub — Todos os direitos reservados.
      </p>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div
      style={{
        marginBottom: "25px",
        padding: "15px 18px",
        background: "#f7f9fc",
        borderRadius: "10px",
        border: "1px solid #e6e6e6",
      }}
    >
      <h2 style={{ fontSize: "1.2rem", marginBottom: "10px", color: "#007bff" }}>
        {title}
      </h2>

      <div style={{ fontSize: "0.95rem" }}>{children}</div>
    </div>
  );
}