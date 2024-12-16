import mongoose from "mongoose";

export interface IUsersSchema {
  id: Number,
  firstName: String,
  username: String,
}

const UsersSchema = new mongoose.Schema({
    id: Number,
    firstName: String,
    username: String,
  });

  export default UsersSchema

