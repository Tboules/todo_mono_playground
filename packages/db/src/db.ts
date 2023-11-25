import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

if (!process.env.POSTGRES_URL) {
  throw new Error("POSTGRES_URL not set!");
}

export const queryClient = postgres(process.env.POSTGRES_URL);

export default drizzle(queryClient);
