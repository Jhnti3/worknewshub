// import { Link } from "react-router-dom";

// const categories = ["Tech", "Career", "Home Office"];

// export default function CategoryBar() {
//   return (
//     <div
//       style={{
//         width: "100%",
//         background: "#f8f9fa",
//         borderBottom: "1px solid #ddd",
//         padding: "10px 25px",
//         display: "flex",
//         gap: "20px",
//         overflowX: "auto",
//       }}
//     >
//       {categories.map((cat) => (
//         <Link
//           key={cat}
//           to={`/category/${encodeURIComponent(cat)}`}
//           style={{
//             color: "#007bff",
//             textDecoration: "none",
//             fontWeight: "bold",
//             whiteSpace: "nowrap",
//           }}
//         >
//           {cat}
//         </Link>
//       ))}
//     </div>
//   );
// }
