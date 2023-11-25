import * as dotenv from "dotenv";
import type { Config } from "drizzle-kit";

dotenv.config({
  path: "../../.env",
});

console.log(process.env.POSTGRES_URL);

if (!process.env.POSTGRES_URL) {
  throw new Error("POSTGRES_URL not set!");
}

export default {
  schema: "./src/schema",
  driver: "pg",
  out: "./drizzle/migrations",
  dbCredentials: {
    connectionString: process.env.POSTGRES_URL,
  },
} satisfies Config;
