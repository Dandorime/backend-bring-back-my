import mongoose from "mongoose";
import CalendarDatesSchema from "@/db/schema/calendar_dates.schema";

const CalendarDates = mongoose.model('CalendarDates', CalendarDatesSchema)

export default CalendarDates