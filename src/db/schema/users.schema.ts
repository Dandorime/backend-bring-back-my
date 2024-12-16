import mongoose from "mongoose";

export interface IUsersSchema {
  id: Number,
  firstName: String,
  username: String,
  authDate: Date
}

const UsersSchema = new mongoose.Schema({
    id: Number,
    firstName: String,
    username: String,
    authDate: Date
  });

  export default UsersSchema

