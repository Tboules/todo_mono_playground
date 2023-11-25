import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

if (!process.env.POSTGRES_URL) {
  throw new Error("POSTGRES_URL not set!");
}

const client = postgres(process.env.POSTGRES_URL);

const db = drizzle(client);

await migrate(db, {
  migrationsFolder: "../drizzle",
});

await client.end();
