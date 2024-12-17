import mongoose from "mongoose";

const TasksSchema = new mongoose.Schema({
    id: Number,
    title: String,
    award: Number
})

export default TasksSchema