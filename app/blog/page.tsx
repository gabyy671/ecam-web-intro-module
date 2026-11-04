import Link from "next/link";
import { getPosts, deletePost } from "@/lib/blog";

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main>
      <h1>My Blog</h1>

      <Link href="/blog/new">Create a new post</Link>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>

            <Link href={`/blog/${post.id}`}>Read more</Link>

            {" | "}

            <Link href={`/blog/edit/${post.id}`}>Edit</Link>

            <form action={deletePost.bind(null, post.id)}>
              <button type="submit">Delete</button>
            </form>
          </li>
        ))}
      </ul>
    </main>
  );
}
