ALTER TABLE "todos" ALTER COLUMN "task" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "todos" ALTER COLUMN "status" SET DEFAULT 'in-progress';--> statement-breakpoint
ALTER TABLE "todos" ADD COLUMN "created_at" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "todos" ADD COLUMN "last_updated" timestamp DEFAULT now();