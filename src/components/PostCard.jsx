import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <div
      style={{
        border: "1px solid #e0e0e0",
        borderRadius: "10px",
        background: "#fff",
        overflow: "hidden",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        transition: "transform 0.2s, box-shadow 0.2s",
        cursor: "pointer",
        position: "relative",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)";
      }}
    >
      {post.featured && (
        <span
          style={{
            position: "absolute",
            background: "#007bff",
            color: "#fff",
            padding: "5px 10px",
            borderRadius: "0 0 8px 0",
            fontSize: "0.8rem",
            fontWeight: "bold",
            zIndex: 1,
          }}
        >
          FEATURED
        </span>
      )}

      <img
        src={post.image}
        alt={post.title}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderBottom: "1px solid #eee",
        }}
      />

      <div style={{ padding: "15px" }}>
        <h2 style={{ margin: "0 0 10px", fontSize: "1.2rem" }}>
          <Link
            to={`/post/${post.id}`}
            style={{
              color: "#007bff",
              textDecoration: "none",
            }}
          >
            {post.title}
          </Link>
        </h2>

        <p style={{ margin: "5px 0", color: "#666", fontSize: "0.9rem" }}>
          {post.category} • {post.date}
        </p>

        <p style={{ marginTop: "10px", color: "#444", lineHeight: "1.6" }}>
          {post.excerpt}
        </p>

        {/* Botão Veja Mais */}
        <div style={{ textAlign: "right", marginTop: "10px" }}>
          <Link
            to={`/post/${post.id}`}
            style={{
              display: "inline-block",
              padding: "6px 12px",
              background: "#007bff",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "5px",
              fontSize: "0.9rem",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#0056b3")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#007bff")}
          >
            Veja mais →
          </Link>
        </div>
      </div>
    </div>
  );
}
