import mongoose from "mongoose";
import { DB_NAME } from "../content.js";

const connectDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log(`\nMONGODB Connected!! Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGOOSEDB Connection Error:", error);
        process.exit(1);
    }
};

export default connectDb;
