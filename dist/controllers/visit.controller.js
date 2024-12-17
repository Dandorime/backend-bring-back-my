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
const controllers_1 = __importDefault(require("../controllers"));
const calendar_dates_model_1 = __importDefault(require("../db/models/calendar_dates.model"));
const visits_model_1 = __importDefault(require("../db/models/visits.model"));
class VisitController extends controllers_1.default {
    index() {
        throw new Error("Method not implemented.");
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
    checkVisit(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const visit = yield visits_model_1.default.findOne({ user_id });
                const today = new Date();
                const todayString = today.toISOString().split('T')[0]; // Форматируем дату для сравнения
                const day = yield calendar_dates_model_1.default.findOne({ date: todayString });
                if (!!visit && !visit.calendar_ids.includes(day === null || day === void 0 ? void 0 : day.id)) {
                    visit.is_open = false;
                    yield visit.save();
                }
                return Promise.resolve(visit);
            }
            catch (e) {
                return Promise.reject(e);
            }
        });
    }
}
exports.default = VisitController;
