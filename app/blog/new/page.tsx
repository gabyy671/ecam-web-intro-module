import Link from "next/link";
import { createPost } from "@/lib/blog";
import { redirect } from "next/navigation";

export default function NewPostPage() {
  async function createPostAndRedirect(form: FormData) {
    "use server";

    await createPost(form);

    redirect("/blog");
  }

  return (
    <main>
      <h1>Create a new post</h1>

      <form action={createPostAndRedirect}>
        <div>
          <label htmlFor="title">Title:</label>

          <input id="title" name="title" type="text" required />
        </div>

        <div>
          <label htmlFor="content">Content:</label>

          <textarea id="content" name="content" required />
        </div>

        <button type="submit">Create post</button>
      </form>

      <Link href="/blog">Cancel</Link>
    </main>
  );
}
