import { migrate } from "drizzle-orm/postgres-js/migrator";
import { db, drizzlePGClient } from "./db";

await migrate(db, {
  migrationsFolder: "./drizzle/migrations",
});

await drizzlePGClient.end();
