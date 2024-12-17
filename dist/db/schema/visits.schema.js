"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const VisitsSchema = new mongoose_1.default.Schema({
    user_id: Number,
    calendar_ids: {
        type: (Array),
        default: []
    },
    is_open: {
        type: Boolean,
        default: false
    }
});
exports.default = VisitsSchema;
