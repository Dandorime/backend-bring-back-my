import mongoose from "mongoose";

export interface IFoundsSchema {
    id: Number,
    title: String,
    subtitle: String,
    description: String
}

const FoundsSchema = new mongoose.Schema({
    id: Number,
    title: String,
    subtitle: String,
    description: String
})

export default FoundsSchema