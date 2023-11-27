import {
  pgEnum,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const todoStatusEnum = pgEnum("status", ["done", "in-progress"]);

export const todos = pgTable("todos", {
  id: serial("id").primaryKey(),
  task: varchar("task").notNull(),
  status: todoStatusEnum("status").default("in-progress").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  lastUpdated: timestamp("last_updated").defaultNow().notNull(),
});

export type Todo = typeof todos.$inferSelect;
export type NewTodo = typeof todos.$inferInsert;
