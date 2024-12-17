import mongoose from "mongoose";

const TasksSchema = new mongoose.Schema({
    id: Number,
    title: String,
    action: String,
    award: Number
})

export default TasksSchema