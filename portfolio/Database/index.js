import mongoose  from "mongoose";

export default async function connectionTB(){
    try {
        
        await mongoose.connect("mongodb+srv://ghaurit82:talha333@cluster0.j2rjwdw.mongodb.net/");

        console.log("Connected to DB")
    } catch (error) {
        console.log("Error connecting",error)
    }
}