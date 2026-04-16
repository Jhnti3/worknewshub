import { useLocation } from "react-router-dom";
import posts from "../data/posts";
import PostCard from "../components/PostCard";

export default function Search() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q") || "";

  const results = posts.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Resultados para: "{query}"</h2>

      {results.length > 0 ? (
        results.map((post) => (
          <PostCard key={post.id} post={post} />
        ))
      ) : (
        <p>Nenhum resultado encontrado.</p>
      )}
    </div>
  );
}