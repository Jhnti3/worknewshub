import { useParams, Link } from "react-router-dom";
import posts from "../data/posts";

// conteúdos dos posts
import post1Content from "../posts/1";
import post2Content from "../posts/2";
import post3Content from "../posts/3";
import post4Content from "../posts/4";
import post5Content from "../posts/5";

const contentMap = {
  1: post1Content,
  2: post2Content,
  3: post3Content,
  4: post4Content,
  5: post5Content,
};

export default function Post() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Post não encontrado</h1>
        <Link to="/">Voltar para Home</Link>
      </div>
    );
  }

  const content = contentMap[post.id] || "";
  const blocks = typeof content === "string" ? content.split("\n\n") : [];

  return (
    <div
      itemScope
      itemType="https://schema.org/Article"
      style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}
    >
      <h1 itemProp="headline" style={{ marginBottom: "10px" }}>
        {post.title}
      </h1>

      <p style={{ color: "#666", marginBottom: "20px" }}>
        {post.category} • {post.date}
      </p>

      {/* Anúncio */}
      <div
        style={{
          margin: "20px 0",
          padding: "20px",
          background: "#f4f4f4",
          textAlign: "center",
          border: "1px solid #ddd",
        }}
      >
        <strong>Anúncio Aqui</strong>
      </div>

      <img
        src={post.image}
        alt={post.title}
        style={{
          width: "100%",
          maxHeight: "400px",
          objectFit: "cover",
          marginBottom: "20px",
          borderRadius: "8px",
        }}
      />

      <div style={{ lineHeight: "1.8", color: "#333", fontSize: "1rem" }}>
        {blocks.map((block, index) => {
          if (block.startsWith("## ")) {
            return (
              <h2 key={index} style={{ margin: "30px 0 15px" }}>
                {block.replace("## ", "")}
              </h2>
            );
          }

          if (block.startsWith("### ")) {
            return (
              <h3 key={index} style={{ margin: "25px 0 10px" }}>
                {block.replace("### ", "")}
              </h3>
            );
          }

          return (
            <p key={index} style={{ marginBottom: "16px" }}>
              {block}
            </p>
          );
        })}
      </div>

      <Link
        to="/"
        style={{ display: "block", marginTop: "30px", color: "#007bff" }}
      >
        ← Voltar para Home
      </Link>
    </div>
  );
}
