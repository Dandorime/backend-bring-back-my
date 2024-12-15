import mongoose from "mongoose"
import UsersSchema from "@/db/schema/users.schema";

const Users = mongoose.model('Users', UsersSchema);

export default Users