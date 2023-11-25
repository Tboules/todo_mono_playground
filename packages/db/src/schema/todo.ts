import { pgEnum, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const todoStatusEnum = pgEnum("status", ["done", "in-progress"]);

export const todos = pgTable("todos", {
  id: serial("id").primaryKey(),
  task: varchar("task"),
  status: todoStatusEnum("status"),
});
