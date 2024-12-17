"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const promos_schema_1 = __importDefault(require("../../db/schema/promos.schema"));
const Promos = mongoose_1.default.model('Promos', promos_schema_1.default);
exports.default = Promos;
