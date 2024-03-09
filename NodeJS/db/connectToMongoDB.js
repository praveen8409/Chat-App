import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectToMongo = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("connected to mongoDB");
    } catch (error) {
        console.log("Error connecting to mongodb",error);
    }
}

export default connectToMongo;