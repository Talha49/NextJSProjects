import { sql } from "@vercel/postgres";
import { pgTable, serial, varchar,timestamp, uniqueIndex } from "drizzle-orm/pg-core";
import { drizzle } from 'drizzle-orm/vercel-postgres';

export const todoTable = pgTable("tododrizz", {
    id: serial("id").primaryKey(),
    task: varchar("task", { length: 255 }).notNull() ,
    createdAt: timestamp("createdAt").defaultNow().notNull(),
},


);

export const db = drizzle(sql);
