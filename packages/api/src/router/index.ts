import { createTRPCRouter, publicProcedure } from "../trpc";

export const appRouter = createTRPCRouter({
  test: publicProcedure.query(() => "Hello from trpc"),
});

export type AppRouter = typeof appRouter;
