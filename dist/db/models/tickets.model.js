"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const tickets_schema_1 = __importDefault(require("../../db/schema/tickets.schema"));
const Tickets = mongoose_1.default.model('Tickets', tickets_schema_1.default);
exports.default = Tickets;
