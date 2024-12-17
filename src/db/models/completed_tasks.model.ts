import mongoose from "mongoose";
import CompletedTasksSchema from "@/db/schema/completed_tasks.schema";

const CompletedTasks = mongoose.model('CompletedTasks', CompletedTasksSchema)

export default CompletedTasks