import mongoose from "mongoose";

const CompletedTasksSchema = new mongoose.Schema({
    user_id: Number,
    task_ids: {
        type: Array<Number | undefined>,
        default: []
    }
})

export default CompletedTasksSchema