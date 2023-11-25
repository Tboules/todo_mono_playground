import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { postgresUrl } from "../drizzle.config.js";

if (!postgresUrl) {
  throw new Error("POSTGRES_URL not set!");
}

export const drizzlePGClient = postgres(postgresUrl);

export default drizzle(drizzlePGClient);
