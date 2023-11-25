DO $$ BEGIN
 CREATE TYPE "status" AS ENUM('done', 'in-progress');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "todos" (
	"id" serial PRIMARY KEY NOT NULL,
	"task" varchar,
	"status" "status"
);
