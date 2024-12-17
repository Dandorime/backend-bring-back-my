import mongoose from "mongoose";

  
  export interface IVisitsSchema {
    user_id: Number,
    calendar_ids: Array<Number | undefined>,
    is_open: Boolean
  }

const VisitsSchema = new mongoose.Schema({
    user_id: Number,
    calendar_ids: { 
        type: Array<Number | undefined>,
        default: []
    },
    is_open: {
        type: Boolean,
        default: false
    }
})

export default VisitsSchema