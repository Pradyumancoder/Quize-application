import mongoose from "mongoose";

export const connect = async () => {
return  mongoose.connect(process.env.MONGODB_URI);
};