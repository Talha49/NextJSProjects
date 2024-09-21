import { pgTable,serial,text,timestamp,uniqueIndex } from "drizzle-orm/pg-core";



export const users = pgTable(

    "users",
    {
        id: serial("id").primaryKey(),
        name: serial("name").notNull(),
        email: serial("email").notNull(),
        image: serial("image").notNull(),
        createdAt: timestamp("created_at").defaultNow()
    },
    (users) => {
        return {
            uniqueIdx: uniqueIndex("unique_idx").on(users)
        }
    }
)