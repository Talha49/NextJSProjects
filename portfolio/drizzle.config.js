import "@/lib/config"
import {defineConfig} from "drizzle-kit"


export default defineConfig({
    schema:"",
    out: "",
    driver: "",
    dbCredentials: {
        connectionString: "",
    },
    verbose: true,
    strict: true,
})