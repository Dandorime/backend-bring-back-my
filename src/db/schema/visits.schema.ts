import mongoose from "mongoose";

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