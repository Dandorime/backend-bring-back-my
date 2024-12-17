import mongoose from "mongoose";
import VisitsSchema from "@/db/schema/visits.schema";

const Visits = mongoose.model('Visits', VisitsSchema)

export default Visits