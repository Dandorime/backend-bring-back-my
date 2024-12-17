import mongoose from "mongoose";
import FoundsSchema from "@/db/schema/founds.schema";

const Founds = mongoose.model('Founds', FoundsSchema)

export default Founds