import Link from "next/link";
import { getPost } from "@/lib/blog";
import { notFound } from "next/navigation";
import { Suspense } from "react";

type BlogPostPageProps = {
  params: Promise<{ id: string }>;
};

export default function BlogPostPage(props: BlogPostPageProps) {
  return (
    <Suspense fallback={<p>Loading blog post...</p>}>
      <BlogPostContent params={props.params} />
    </Suspense>
  );
}

async function BlogPostContent({ params }: BlogPostPageProps) {
  const id = Number((await params).id);

  if (!Number.isInteger(id) || id <= 0) {
    notFound();
  }

  const post = await getPost(id);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <h1>{post.title}</h1>

      <p>{post.content}</p>

      <Link href="/blog">Back to blog</Link>

      <Link href={`/blog/edit/${post.id}`}>Edit this post</Link>
    </main>
  );
}
