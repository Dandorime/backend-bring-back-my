"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const CompletedTasksSchema = new mongoose_1.default.Schema({
    user_id: Number,
    task_ids: {
        type: (Array),
        default: []
    }
});
exports.default = CompletedTasksSchema;