// export default function About() {
//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Sobre o WorkNewsHub</h2>
//       <p>Blog de notícias e artigos focados em carreiras, tecnologia e tendências de trabalho.</p>
//     </div>
//   );
// }


export default function About() {
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
        Quem somos
      </h1>

      <p style={{ marginBottom: "20px", fontSize: "1.05rem" }}>
        Bem-vindo ao <strong>worknewshub</strong>, onde tecnologia e cotidiano se conectam para tornar a vida mais prática, eficiente e inteligente.
      </p>

      <Section title="Nossa missão">
        Simplificar a tecnologia para o dia a dia. Mostramos como apps, automações e ferramentas digitais podem melhorar trabalho, produtividade e lazer.
      </Section>

      <Section title="O que fazemos">
        <p style={{ marginBottom: "10px" }}>
          Produzimos conteúdos sobre tecnologia aplicada à vida real, incluindo:
        </p>

        <ul style={{ paddingLeft: "20px", margin: 0 }}>
          <li>Guias práticos</li>
          <li>Análises de ferramentas e produtos</li>
          <li>Dicas de produtividade</li>
          <li>Tendências de inovação e futuro do trabalho</li>
        </ul>
      </Section>

      <Section title="Nossa história">
        O worknewshub surgiu da ideia de tornar a tecnologia mais acessível.
        A proposta é reduzir a complexidade do mundo digital e ajudar qualquer pessoa a usar melhor as ferramentas disponíveis.
      </Section>

      <Section title="Nossa visão">
        Acreditamos em um futuro onde a tecnologia trabalha a favor das pessoas.
        Um cenário em que dispositivos e plataformas ajudam a economizar tempo, aumentar segurança e melhorar a qualidade de vida.
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