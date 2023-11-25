import { migrate } from "drizzle-orm/postgres-js/migrator";
import db, { drizzlePGClient } from "./db.js";

await migrate(db, {
  migrationsFolder: "./drizzle",
});

await drizzlePGClient.end();
