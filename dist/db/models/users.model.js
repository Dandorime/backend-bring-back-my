"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const users_schema_1 = __importDefault(require("../../db/schema/users.schema"));
const Users = mongoose_1.default.model('Users', users_schema_1.default);
exports.default = Users;
