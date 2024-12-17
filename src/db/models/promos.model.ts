import mongoose from "mongoose";
import PromosSchema from "@/db/schema/promos.schema";

const Promos = mongoose.model('Promos', PromosSchema)

export default Promos