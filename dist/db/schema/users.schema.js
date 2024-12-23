"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UsersSchema = new mongoose_1.default.Schema({
    id: Number,
    firstName: String,
    username: String,
    authDate: Date,
    missed_days: {
        type: Number,
        default: 0
    }
});
exports.default = UsersSchema;
