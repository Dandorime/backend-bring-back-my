"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const TestSchema = new mongoose_1.default.Schema({
    id: Number,
    name: String,
    updated_at: Date,
    created_at: Date
});
exports.default = TestSchema;
