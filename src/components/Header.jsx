// import { useState, useEffect, useRef } from "react";
// import { Link, useLocation } from "react-router-dom";

// export default function Header({ onSearch }) {
//   const location = useLocation();
//   const categories = ["Tech", "Career", "Home Office"];

//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
//   const [query, setQuery] = useState("");

//   const debounceRef = useRef(null);

//   // Atualiza isMobile
//   useEffect(() => {
//     const handleResize = () => {
//       const mobile = window.innerWidth < 768;
//       setIsMobile(mobile);
//       if (!mobile) setMenuOpen(false);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const isActive = (path) => location.pathname === path;

//   const linkStyle = (path) => ({
//     color: isActive(path) ? "#ffd700" : "#fff",
//     textDecoration: "none",
//     fontWeight: isActive(path) ? "bold" : "normal",
//     padding: "5px 0",
//     borderBottom: isActive(path)
//       ? "2px solid #ffd700"
//       : "2px solid transparent",
//     transition: "border-bottom 0.3s ease",
//     display: "inline-block",
//     whiteSpace: "nowrap",
//   });

//   const renderLink = (to, label) => (
//     <Link
//       key={to}
//       to={to}
//       style={linkStyle(to)}
//       onMouseEnter={(e) => {
//         if (!isActive(to))
//           e.target.style.borderBottom = "2px solid #ffd700";
//       }}
//       onMouseLeave={(e) => {
//         if (!isActive(to))
//           e.target.style.borderBottom = "2px solid transparent";
//       }}
//     >
//       {label}
//     </Link>
//   );

//   // debounce search
//   const handleSearch = (e) => {
//     const value = e.target.value;
//     setQuery(value);

//     clearTimeout(debounceRef.current);
//     debounceRef.current = setTimeout(() => {
//       if (onSearch) onSearch(value);
//     }, 300);
//   };

//   return (
//     <header
//       style={{
//         width: "100%",
//         background: "#007bff",
//         color: "#fff",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: isMobile ? "space-between" : "center",
//         flexWrap: "wrap",
//         padding: "15px 25px",
//         boxSizing: "border-box",
//         position: "relative",
//       }}
//     >
//       {/* Logo */}
//       <h1
//         style={{
//           fontSize: "1.6rem",
//           fontWeight: "bold",
//           position: isMobile ? "static" : "absolute",
//           left: isMobile ? "auto" : "25px",
//         }}
//       >
//         <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
//           WorkNewsHub
//         </Link>
//       </h1>

//       {/* Hamburger Mobile */}
//       {isMobile && (
//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           style={{
//             background: "none",
//             border: "none",
//             cursor: "pointer",
//             padding: "5px",
//           }}
//         >
//           <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
//             <rect y="4" width="24" height="2" />
//             <rect y="11" width="24" height="2" />
//             <rect y="18" width="24" height="2" />
//           </svg>
//         </button>
//       )}

//       {/* Menu */}
//       <nav
//         style={{
//           display: "flex",
//           flexDirection: isMobile ? "column" : "row",
//           justifyContent: isMobile ? "center" : "flex-start",
//           alignItems: "center",
//           flexWrap: "wrap",
//           gap: "20px",
//           width: isMobile ? "100%" : "auto",
//           marginTop: isMobile ? "10px" : "0",
//           overflow: "hidden",
//           maxHeight: isMobile ? (menuOpen ? "500px" : "0") : "none",
//           transition: isMobile ? "max-height 0.3s ease" : "none",
//         }}
//       >
//         {renderLink("/", "Home")}

//         {categories.map((cat) =>
//           renderLink(`/category/${encodeURIComponent(cat)}`, cat)
//         )}

//         {renderLink("/about", "About")}

//         {/* SEARCH */}
//         <input
//           type="text"
//           placeholder="Buscar..."
//           value={query}
//           onChange={handleSearch}
//           style={{
//             padding: "6px 10px",
//             borderRadius: "6px",
//             border: "none",
//             outline: "none",
//             minWidth: "160px",
//           }}
//         />
//       </nav>
//     </header>
//   );
// }

import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const categories = ["Tech", "Career", "Home Office"];

  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isActive = (path) => location.pathname === path;

  const linkStyle = (path) => ({
    color: isActive(path) ? "#ffd700" : "#fff",
    textDecoration: "none",
    fontWeight: isActive(path) ? "bold" : "normal",
    padding: "5px 0",
    borderBottom: isActive(path)
      ? "2px solid #ffd700"
      : "2px solid transparent",
    transition: "border-bottom 0.3s ease",
    display: "inline-block",
    whiteSpace: "nowrap",
  });

  const renderLink = (to, label) => (
    <Link
      key={to}
      to={to}
      style={linkStyle(to)}
      onMouseEnter={(e) => {
        if (!isActive(to))
          e.target.style.borderBottom = "2px solid #ffd700";
      }}
      onMouseLeave={(e) => {
        if (!isActive(to))
          e.target.style.borderBottom = "2px solid transparent";
      }}
    >
      {label}
    </Link>
  );

  // 🔥 NOVO: navega ao pressionar ENTER
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <header
      style={{
        width: "100%",
        background: "#007bff",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: isMobile ? "space-between" : "center",
        flexWrap: "wrap",
        padding: "15px 25px",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      {/* Logo */}
      <h1
        style={{
          fontSize: "1.6rem",
          fontWeight: "bold",
          position: isMobile ? "static" : "absolute",
          left: isMobile ? "auto" : "25px",
        }}
      >
        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
          WorkNewsHub
        </Link>
      </h1>

      {/* Mobile */}
      {isMobile && (
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "5px",
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <rect y="4" width="24" height="2" />
            <rect y="11" width="24" height="2" />
            <rect y="18" width="24" height="2" />
          </svg>
        </button>
      )}

      {/* Menu */}
      <nav
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: isMobile ? "center" : "flex-start",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
          width: isMobile ? "100%" : "auto",
          marginTop: isMobile ? "10px" : "0",
          overflow: "hidden",
          maxHeight: isMobile ? (menuOpen ? "500px" : "0") : "none",
          transition: isMobile ? "max-height 0.3s ease" : "none",
        }}
      >
        {renderLink("/", "Home")}

        {categories.map((cat) =>
          renderLink(`/category/${encodeURIComponent(cat)}`, cat)
        )}

        {renderLink("/about", "About")}

        {/* 🔎 SEARCH (corrigido) */}
        <input
          type="text"
          placeholder="Buscar..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{
            padding: "6px 10px",
            borderRadius: "6px",
            border: "none",
            outline: "none",
            minWidth: "160px",
          }}
        />
      </nav>
    </header>
  );
}