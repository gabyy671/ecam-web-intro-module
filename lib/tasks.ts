'use server';

import { cacheTag, refresh, revalidateTag, updateTag } from "next/cache";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const tasks: { title: string; done: boolean }[] = [
  { title: "apprendre asynch/await", done: false },
  { title: "ecouter mehdi", done: false },
  { title: "reparer la tv", done: false },
];

export async function getTasks() {
  "use cache";
  cacheTag("tasks");
  return tasks;
}

export async function createTask(form: FormData) {
  const title = form.get("title");
  if (title) {
    tasks.push({
      title: String(form.get("title")),
      done: false,
    });
  }

  updateTag("tasks");
}

export async function deleteTask(id: number) {
  tasks.splice(id, 1);
  updateTag("tasks");
}
