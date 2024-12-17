import mongoose from "mongoose";

const CalendarDatesSchema = new mongoose.Schema({
    id: Number,
    date: Date,
    found_id: Number
})

export default CalendarDatesSchema