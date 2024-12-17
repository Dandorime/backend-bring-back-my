import mongoose from "mongoose";

export interface IPromosSchema {
    id: Number,
    title: String,
    description: String,
    photo: String,
    price: Number
}

const PromosSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    photo: String,
    price: Number
})

export default PromosSchema