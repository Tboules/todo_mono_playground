import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as dotenv from "dotenv";

const queryClient = postgres(process.env.POSTGRES_URL ?? "");

export default drizzle(queryClient);
