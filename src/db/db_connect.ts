import mongoose from "mongoose";

async function db_connect() {
    await mongoose.connect(process.env.DB_MONGO_KEY + 'bring-back-my-claster' || '')
}

export {db_connect}
