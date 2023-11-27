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
  status: todoStatusEnum("status").default("in-progress"),
  createdAt: timestamp("created_at").defaultNow(),
  lastUpdated: timestamp("last_updated").defaultNow(),
});
