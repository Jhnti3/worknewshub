// export default function Footer() {
//   return (
//     <footer
//       style={{
//         width: "100%",
//         background: "#007bff",
//         color: "#fff",
//         padding: "20px 25px",
//         textAlign: "center",
//         marginTop: "auto",
//       }}
//     >
//       <p style={{ margin: 0 }}>© 2025 WorkNewsHub. Todos os direitos reservados.</p>
//       <p style={{ margin: "5px 0 0 0", fontSize: "0.85rem" }}>
//         Desenvolvido por John
//       </p>
//     </footer>
//   );
// }


import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        background: "#007bff",
        color: "#fff",
        padding: "20px 25px",
        textAlign: "center",
        marginTop: "auto",
      }}
    >
      <div style={{ marginBottom: "10px" }}>
        <Link to="/about" style={{ color: "#fff", textDecoration: "none", margin: "0 10px" }}>
          Quem somos
        </Link>

        <Link to="/privacy" style={{ color: "#fff", textDecoration: "none", margin: "0 10px" }}>
          Política de Privacidade
        </Link>

        <Link to="/terms" style={{ color: "#fff", textDecoration: "none", margin: "0 10px" }}>
          Termos de Uso
        </Link>

        <Link to="/contact" style={{ color: "#fff", textDecoration: "none", margin: "0 10px" }}>
          Contato
        </Link>
      </div>

      <p style={{ margin: 0 }}>© 2025 WorkNewsHub. Todos os direitos reservados.</p>

      <p style={{ margin: "5px 0 0 0", fontSize: "0.85rem" }}>
        Desenvolvido por John
      </p>
    </footer>
  );
}