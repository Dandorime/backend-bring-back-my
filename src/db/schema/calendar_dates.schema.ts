import mongoose from "mongoose";
import { IFoundsSchema } from "@/db/schema/founds.schema";

export interface ResCalendarDates {
    id: Number,
    date: Date,
    found_id: Number,
    found_info: IFoundsSchema
}
export interface ICalendarDatesSchema {
    id: Number,
    date: Date,
    found_id: Number
}

const CalendarDatesSchema = new mongoose.Schema({
    id: Number,
    date: Date,
    found_id: Number
})

export default CalendarDatesSchema