import mongoose from "mongoose"


export default async function connectTB(){
try {
    await mongoose.connect('mongodb+srv://ghaurit82:talha302@admin.datdym4.mongodb.net/')
    console.log("Database connection established")
} catch (error) {
    console.log(error)
}}
