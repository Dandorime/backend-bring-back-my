import mongoose from "mongoose";

export interface IResUserData {
  id: Number,
  firstName: String,
  username: String,
  authDate: Date,
}

export interface IUsersSchema {
  id: Number,
  firstName: String,
  username: String,
  authDate: Date,
  missed_days: Number
}

const UsersSchema = new mongoose.Schema({
    id: Number,
    firstName: String,
    username: String,
    authDate: Date,
    missed_days: {
      type: Number,
      default: 0
    }
  });

  export default UsersSchema

