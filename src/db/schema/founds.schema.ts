import mongoose from "mongoose";

const FoundsSchema = new mongoose.Schema({
    id: Number,
    title: String,
    subtitle: String,
    description: String
})

export default FoundsSchema