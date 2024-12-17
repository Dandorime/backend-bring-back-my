import mongoose from "mongoose";
import TasksSchema from "@/db/schema/tasks.schema";

const Tasks = mongoose.model('Tasks', TasksSchema)

export default Tasks