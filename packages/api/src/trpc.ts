import { db } from "@repo/db";
import { initTRPC } from "@trpc/server";
import superjson from "superjson";

export const createContext = () => {
  return {
    db,
  };
};

const trpc = initTRPC.context<typeof createContext>().create({
  transformer: superjson,
});

export const createTRPCRouter = trpc.router;
export const publicProcedure = trpc.procedure;
