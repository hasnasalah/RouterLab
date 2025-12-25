import { useParams, useNavigate } from "react-router-dom";
import { posts } from "../lib/posts";
import "./post.css";

export default function PostDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const foundPost = posts.find(post => post.slug === slug);

  if (!foundPost) {
    return <h2>Post not found</h2>;
  }

  return (
    <article className="single-post">
      <h1 className="post-title">{foundPost.title}</h1>

      <p className="post-content">
        {foundPost.content}
      </p>

      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>
    </article>
  );
}
