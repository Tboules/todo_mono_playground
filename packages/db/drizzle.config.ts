import * as dotenv from "dotenv";
import type { Config } from "drizzle-kit";

dotenv.config({
  path: "../../.env",
});

export const postgresUrl = process.env.POSTGRES_URL;

if (!postgresUrl) {
  throw new Error("POSTGRES_URL not set!");
}

export default {
  schema: "./src/schema",
  driver: "pg",
  out: "./drizzle/migrations",
  dbCredentials: {
    connectionString: postgresUrl,
  },
} satisfies Config;
