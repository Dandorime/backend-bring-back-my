import mongoose from "mongoose";

const UserPromosSchema = new mongoose.Schema({
    user_id: Number,
    promo_ids: {
        type: Array<Number | undefined>,
        default: []
    }
})

export default UserPromosSchema