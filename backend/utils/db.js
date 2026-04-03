import "dotenv/config";
import mongoose from "mongoose";
const uri=process.env.CONNECTION_STRING
const connectDb=async()=>{
try {
    await mongoose.connect(uri)
} catch (error) {
    console.log("Connection Failed")
    process.exit(1)
}
}
export default connectDb