import mongoose from "mongoose";

export interface IUsersSchema {
  id: Number,
  first_name: String,
  username: String,
}

const UsersSchema = new mongoose.Schema({
    id: Number,
    first_name: String,
    username: String,
  });

  export default UsersSchema

