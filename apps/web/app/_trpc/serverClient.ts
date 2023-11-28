import { appRouter } from "@repo/api";
import { db } from "@repo/db";

export const serverClient = appRouter.createCaller({
  db: db,
});
