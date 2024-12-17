"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const calendar_dates_schema_1 = __importDefault(require("../../db/schema/calendar_dates.schema"));
const CalendarDates = mongoose_1.default.model('CalendarDates', calendar_dates_schema_1.default);
exports.default = CalendarDates;
