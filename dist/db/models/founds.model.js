"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const founds_schema_1 = __importDefault(require("../../db/schema/founds.schema"));
const Founds = mongoose_1.default.model('Founds', founds_schema_1.default);
exports.default = Founds;
