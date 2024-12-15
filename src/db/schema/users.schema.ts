import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
    id: Number,
    first_name: String,
    last_name: String,
    username: String,
    language_code: String,
    is_premium: Boolean,
    allows_write_to_pm: Boolean
  });

  export default UsersSchema

