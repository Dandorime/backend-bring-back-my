"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const TicketsSchema = new mongoose_1.default.Schema({
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
});
exports.default = TicketsSchema;
