import mongoose from "mongoose";

const TestSchema = new mongoose.Schema({
    id: Number,
    name: String,
    updated_at: Date,
    created_at: Date
});

export default TestSchema

