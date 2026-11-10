import { float } from 'drizzle-orm/cockroach-core'
import { boolean, integer, pgTable, text, uuid } from 'drizzle-orm/pg-core'

export const tasksTable = pgTable('tasks', {
  id: uuid().defaultRandom().primaryKey(),
  title: text().notNull(),
  done: boolean().default(false).notNull(),
})

export const shopTable = pgTable('item', {
  id: uuid().defaultRandom().primaryKey(),
  item_name: text().notNull(),
  quantity: integer().notNull(),
  price: float().notNull()
})

export type ShopItem = typeof shopTable.$inferSelect
export type NewShopItem = typeof shopTable.$inferInsert
