import mongoose from "mongoose";

const VisitsSchema = new mongoose.Schema({
    user_id: Number,
    calendar_ids: { 
        type: Array<Number | undefined>,
        default: []
    }
})

export default VisitsSchema