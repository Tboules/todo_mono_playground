import { createTRPCRouter, publicProcedure } from "../trpc";

export const appRouter = createTRPCRouter({
  test: publicProcedure.query(() => {
    return {
      hello: "world",
      foo: 2,
    };
  }),
});

export type AppRouter = typeof appRouter;
