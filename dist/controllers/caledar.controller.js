"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
const calendar_dates_model_1 = __importDefault(require("../db/models/calendar_dates.model"));
const founds_model_1 = __importDefault(require("../db/models/founds.model"));
class CalendarController extends _1.default {
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            const calendar = (yield calendar_dates_model_1.default.find()).map((data) => __awaiter(this, void 0, void 0, function* () {
                const found = yield founds_model_1.default.findOne({ id: data.found_id });
                return Object.assign(Object.assign({}, data), { found_info: found });
            }));
            return Promise.resolve(calendar);
        });
    }
    find(arg) {
        throw new Error("Method not implemented.");
    }
    create(arg, params) {
        throw new Error("Method not implemented.");
    }
    update(arg) {
        throw new Error("Method not implemented.");
    }
    delete(arg) {
        throw new Error("Method not implemented.");
    }
}
exports.default = CalendarController;
