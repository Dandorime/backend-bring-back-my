"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const completed_tasks_schema_1 = __importDefault(require("../../db/schema/completed_tasks.schema"));
const CompletedTasks = mongoose_1.default.model('CompletedTasks', completed_tasks_schema_1.default);
exports.default = CompletedTasks;
