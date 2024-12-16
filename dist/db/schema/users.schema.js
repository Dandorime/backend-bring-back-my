"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UsersSchema = new mongoose_1.default.Schema({
    id: Number,
    first_name: String,
    last_name: String,
    username: String,
    language_code: String,
    is_premium: Boolean,
    allows_write_to_pm: Boolean
});
exports.default = UsersSchema;
