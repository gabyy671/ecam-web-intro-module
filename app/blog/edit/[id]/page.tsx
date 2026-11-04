import Link from "next/link";
import { getPost, editPost } from "@/lib/blog";
import { notFound, redirect } from "next/navigation";
import { Suspense } from "react";

type EditPostPageProps = {
  params: Promise<{ id: string }>;
};

export default function EditPostPage(props: EditPostPageProps) {
  return (
    <Suspense fallback={<p>Loading edit page...</p>}>
      <EditPostContent params={props.params} />
    </Suspense>
  );
}

async function EditPostContent({ params }: EditPostPageProps) {
  const id = Number((await params).id);

  if (!Number.isInteger(id) || id <= 0) {
    notFound();
  }

  const post = await getPost(id);

  if (!post) {
    notFound();
  }

  async function editPostAndRedirect(form: FormData) {
    "use server";

    await editPost(form);

    redirect(`/blog/${id}`);
  }

  return (
    <main>
      <h1>Edit post</h1>

      <form action={editPostAndRedirect}>
        <input type="hidden" name="id" value={post.id} />

        <div>
          <label htmlFor="title">Title:</label>
          <input id="title" name="title" defaultValue={post.title} required />
        </div>

        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            defaultValue={post.content}
            required
          />
        </div>

        <button type="submit">Save changes</button>
      </form>

      <Link href="/blog">Cancel</Link>
    </main>
  );
}
