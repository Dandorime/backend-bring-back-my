import mongoose from "mongoose";
import UserPromosSchema from "@/db/schema/user_promos.schema";

const UserPromos = mongoose.model('UserPromos', UserPromosSchema)

export default UserPromos