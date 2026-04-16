import { useParams } from "react-router-dom";
import posts from "../data/posts";
import PostCard from "../components/PostCard";

export default function Category() {
  const { categoryName } = useParams();
  const decodedCategory = decodeURIComponent(categoryName || "");

  const filteredPosts = posts
    .filter(
      (post) =>
        (post.category || "").toLowerCase() ===
        decodedCategory.toLowerCase()
    )
    .filter((post) =>
      `${post.title || ""} ${post.excerpt || ""}`
        .toLowerCase()
        .includes("")
    );

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "20px" }}>{decodedCategory}</h1>

      {filteredPosts.length === 0 ? (
        <p>Nenhum post encontrado.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}