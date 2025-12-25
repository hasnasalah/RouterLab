import {posts} from "../lib/posts";
import "../App.css";
import {Link} from "react-router-dom";
export default function BlogPage(){



return (
    <div className="posts-container">
      <h2>Blog</h2>
      {posts.map((post) => {
        return(
          <p className="post" key={post.id}>
            <Link className="title" to={`/post/${post.slug}`}> {post.title}</Link>
          </p>
        );
      })}
    </div>
  );




}