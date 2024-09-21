import { sql } from "@vercel/postgres";
import { pgTable, serial, varchar } from "drizzle-orm/pg-core";
import { drizzle } from 'drizzle-orm/vercel-postgres';

export const todoTable = pgTable("tododrizz", {
    id: serial("id").primaryKey(),
    task: varchar("task", { length: 255 }).notNull() 
});

export const db = drizzle(sql);
