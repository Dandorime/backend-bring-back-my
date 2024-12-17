"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const user_promos_schema_1 = __importDefault(require("../../db/schema/user_promos.schema"));
const UserPromos = mongoose_1.default.model('UserPromos', user_promos_schema_1.default);
exports.default = UserPromos;
