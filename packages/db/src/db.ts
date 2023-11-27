import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { postgresUrl } from "../drizzle.config";

import * as todo from "./schema/todo";

export const schema = { ...todo };

if (!postgresUrl) {
  throw new Error("POSTGRES_URL not set!");
}

export const drizzlePGClient = postgres(postgresUrl);

export const db = drizzle(drizzlePGClient, {
  schema,
});
