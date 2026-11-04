'use server';

import { cacheTag, updateTag } from "next/cache";

type BlogPost = {
  id: number;
  title: string;
  content: string;
};

let posts: BlogPost[] = [
  {
    id: 1,
    title: "My first blog post",
    content: "Welcome to my blog!",
  },
  {
    id: 2,
    title: "Learning Next.js",
    content: "Next.js is really interesting.",
  },
];

let nextId = 3;


export async function getPosts() {
  "use cache";
  cacheTag("posts");

  return posts;
}


export async function getPost(id: number) {
  "use cache";
  cacheTag("posts");

  return posts.find((post) => post.id === id);
}


export async function createPost(form: FormData) {
  const title = String(form.get("title") || "");
  const content = String(form.get("content") || "");

  if (!title.trim() || !content.trim()) return;

  posts.push({
    id: nextId++,
    title,
    content,
  });

  updateTag("posts");
}


export async function editPost(form: FormData) {
  const id = Number(form.get("id"));
  const title = String(form.get("title") || "");
  const content = String(form.get("content") || "");

  const post = posts.find((post) => post.id === id);

  if (!post || !title.trim() || !content.trim()) return;

  post.title = title;
  post.content = content;

  updateTag("posts");
}


export async function deletePost(id: number) {
  posts = posts.filter((post) => post.id !== id);

  updateTag("posts");
}
