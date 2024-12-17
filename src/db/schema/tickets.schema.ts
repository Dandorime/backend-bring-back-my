import mongoose from "mongoose";

const TicketsSchema = new mongoose.Schema({
    user_id: Number,
    count: {
        type: Number,
        default: 0
    },
    last_data_add_from_game: {
        type: Date,
        default: ''
    },
    penalty: {
        type: Number,
        default: 0
    }
})

export default TicketsSchema