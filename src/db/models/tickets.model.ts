import mongoose from "mongoose";
import TicketsSchema from "@/db/schema/tickets.schema";

const Tickets = mongoose.model('Tickets', TicketsSchema)

export default Tickets