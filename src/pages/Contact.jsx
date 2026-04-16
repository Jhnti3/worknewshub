// export default function Contact() {
//   return (
//     <div style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
//       <h1>Contato</h1>

//       <p>Fale com a equipe do WorkNewsHub pelos canais abaixo.</p>

//       <h2>E-mail</h2>
//       <p>contato@worknewshub.com</p>

//       <h2>Suporte</h2>
//       <p>Dúvidas técnicas ou problemas com o site.</p>

//       <h2>Parcerias</h2>
//       <p>Propostas comerciais podem ser enviadas por e-mail.</p>
//     </div>
//   );
// }

export default function Contact() {
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
        Contato
      </h1>

      <p style={{ marginBottom: "20px", fontSize: "1.05rem" }}>
        Aqui no worknewshub, buscamos simplificar e tornar mais acessível o uso da tecnologia no dia a dia.
        Se você tiver dúvidas, sugestões ou interesse em parcerias, estamos abertos ao contato.
      </p>

      <Section title="E-mail">
        <p>
          Para questões gerais, feedback ou ideias, envie um e-mail para:
        </p>
        <strong>worknewshub@contato.com</strong>
        <p style={{ marginTop: "10px" }}>
          Respondemos o mais rápido possível dentro do nosso fluxo de atendimento.
        </p>
      </Section>

      <Section title="Conecte-se">
        <p>
          Também estamos presentes nas redes sociais, onde compartilhamos novidades, atualizações e conteúdos sobre tecnologia e inovação.
        </p>
        <p>
          Acreditamos que a troca com a comunidade é parte essencial da evolução do projeto.
        </p>
      </Section>

      <Section title="Mensagem final">
        <p>
          Valorizamos cada contato. Seu feedback ajuda a melhorar continuamente o worknewshub.
          Nosso objetivo é ser uma referência em conteúdo sobre tecnologia, produtividade e inovação.
        </p>
      </Section>
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