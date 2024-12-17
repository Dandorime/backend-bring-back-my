"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const visits_schema_1 = __importDefault(require("../../db/schema/visits.schema"));
const Visits = mongoose_1.default.model('Visits', visits_schema_1.default);
exports.default = Visits;
