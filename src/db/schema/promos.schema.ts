import mongoose from "mongoose";

const PromosSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    photo: String,
    price: Number
})

export default PromosSchema