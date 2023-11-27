import { desc, eq, schema } from "@repo/db";

import { createTRPCRouter, publicProcedure } from "../trpc";
import { todosInsertSchema, todosSelectSchema } from "@repo/db/src/schema/todo";

export const todoRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.todos.findMany({ orderBy: desc(schema.todos.id) });
  }),
  byId: publicProcedure
    .input(todosSelectSchema.pick({ id: true }))
    .query(({ ctx, input }) => {
      return ctx.db.query.todos.findFirst({
        where: eq(schema.todos.id, input.id),
      });
    }),
  create: publicProcedure
    .input(todosInsertSchema.pick({ task: true }))
    .mutation(({ ctx, input }) => {
      return ctx.db.insert(schema.todos).values(input);
    }),
  update: publicProcedure
    .input(todosSelectSchema)
    .mutation(({ ctx, input }) => {
      return ctx.db
        .update(schema.todos)
        .set({
          task: input.task,
          status: input.status,
          lastUpdated: new Date(Date.now()),
        })
        .where(eq(schema.todos.id, input.id));
    }),
  delete: publicProcedure
    .input(todosSelectSchema.pick({ id: true }))
    .mutation(({ ctx, input }) => {
      return ctx.db.delete(schema.todos).where(eq(schema.todos.id, input.id));
    }),
});
