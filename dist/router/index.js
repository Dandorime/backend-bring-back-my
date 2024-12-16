"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_routers_1 = __importDefault(require("../router/user.routers"));
const apiRouter = (0, express_1.Router)();
apiRouter.use('/users', user_routers_1.default);
exports.default = apiRouter;
