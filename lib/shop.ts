
'use server'

import { db } from "@/db";
import { shopTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import type { NewShopItem } from "@/db/schema";

export async function getItem() {
  return await db.select().from(shopTable);
}

export async function addItem(formData: FormData) {
  const item = {
    item_name: String(formData.get("item_name")),
    quantity: Number(formData.get("quantity")),
    price: Number(formData.get("price")),
  };

  await db.insert(shopTable).values(item);

  redirect((await headers()).get("referer") ?? "/");
}

export async function editStock(id: string, formData: FormData) {
  const item = {
    item_name: String(formData.get("item_name")),
    quantity: Number(formData.get("quantity")),
    price: Number(formData.get("price")),
  };

  await db.update(shopTable).set(item).where(eq(shopTable.id, id));

  redirect((await headers()).get("referer") ?? "/");
}

export async function removeItem(id: string) {
  await db.delete(shopTable).where(eq(shopTable.id, id));

  redirect((await headers()).get("referer") ?? "/");
}
