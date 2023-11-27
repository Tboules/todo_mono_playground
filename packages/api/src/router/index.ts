import { createTRPCRouter, publicProcedure } from "../trpc";
import { todoRouter } from "./todo";

export const appRouter = createTRPCRouter({
  todos: todoRouter,
  test: publicProcedure.query(() => {
    return {
      hello: "world",
      foo: 2,
    };
  }),
});

export type AppRouter = typeof appRouter;
