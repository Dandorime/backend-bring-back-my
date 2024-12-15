import mongoose from "mongoose";

async function main() {
    await mongoose.connect(process.env.DB_MONGO_KEY || '')
}

export {main}
