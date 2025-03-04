"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const FoundsSchema = new mongoose_1.default.Schema({
    id: Number,
    title: String,
    subtitle: String,
    description: String
});
exports.default = FoundsSchema;
