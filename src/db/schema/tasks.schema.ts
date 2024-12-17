import mongoose from "mongoose";

export interface ITasksSchema {
    id: Number,
    title: String,
    action: String,
    award: Number
}

const TasksSchema = new mongoose.Schema({
    id: Number,
    title: String,
    action: String,
    award: Number
})

export default TasksSchema