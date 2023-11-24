import { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import type { AppRouter } from "./src/router";

export { appRouter, type AppRouter } from "./src/router";

export type RouterInputs = inferRouterInputs<AppRouter>;
export type RouterOutputs = inferRouterOutputs<AppRouter>;
