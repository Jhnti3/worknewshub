import posts from "../data/posts";
import PostCard from "../components/PostCard";
import { Link } from "react-router-dom";

export default function Home() {
  const filteredPosts = posts;

  const featuredPosts = filteredPosts.filter((post) => post.featured);
  const latestPosts = filteredPosts.filter((post) => !post.featured);

  const getCategory = (postList) => {
    if (!postList.length) return "";
    return postList[0].category;
  };

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      
      {/* Featured */}
      {featuredPosts.length > 0 && (
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ marginBottom: "20px" }}>Featured</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "20px",
            }}
          >
            {featuredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

          <div style={{ marginTop: "10px", textAlign: "right" }}>
            <Link
              to={`/category/${encodeURIComponent(getCategory(featuredPosts))}`}
              style={{
                color: "#007bff",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Ver todos →
            </Link>
          </div>
        </section>
      )}

      {/* Últimos Posts */}
      {latestPosts.length > 0 && (
        <section>
          <h2 style={{ marginBottom: "20px" }}>Últimos Posts</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "20px",
            }}
          >
            {latestPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

          <div style={{ marginTop: "10px", textAlign: "right" }}>
            <Link
              to={`/category/${encodeURIComponent(getCategory(latestPosts))}`}
              style={{
                color: "#007bff",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Ver todos →
            </Link>
          </div>
        </section>
      )}

      {/* Nenhum resultado */}
      {!filteredPosts.length && (
        <p style={{ marginTop: "40px", textAlign: "center" }}>
          Nenhum post encontrado.
        </p>
      )}
    </div>
  );
}