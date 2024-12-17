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
const completed_tasks_model_1 = __importDefault(require("../db/models/completed_tasks.model"));
const founds_model_1 = __importDefault(require("../db/models/founds.model"));
const tickets_model_1 = __importDefault(require("../db/models/tickets.model"));
const user_promos_model_1 = __importDefault(require("../db/models/user_promos.model"));
const users_model_1 = __importDefault(require("../db/models/users.model"));
const visits_model_1 = __importDefault(require("../db/models/visits.model"));
class UserController extends controllers_1.default {
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield users_model_1.default.find();
            return Promise.resolve(result);
        });
    }
    create(request, params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield users_model_1.default.findOneAndUpdate({ id: request.id }, { id: request.id, firstName: request.firstName, username: request.username, authDate: params.date }, { new: true, upsert: true });
                const tikets = yield tickets_model_1.default.findOneAndUpdate({ user_id: user.id }, { user_id: user.id }, { new: true, upsert: true });
                const userPromos = yield user_promos_model_1.default.findOneAndUpdate({ user_id: user.id }, { user_id: user.id }, { new: true, upsert: true });
                const completedTasks = yield completed_tasks_model_1.default.findOneAndReplace({ user_id: user.id }, { user_id: user.id }, { new: true, upsert: true });
                const visits = yield visits_model_1.default.findOneAndUpdate({ user_id: user.id }, { user_id: user.id }, { new: true, upsert: true });
                const result = {
                    user,
                    tikets,
                    userPromos,
                    completedTasks,
                    visits
                };
                return Promise.resolve(result);
            }
            catch (e) {
                return Promise.reject(e);
            }
        });
    }
    find(arg) {
        throw new Error("Method not implemented.");
    }
    update(arg) {
        throw new Error("Method not implemented.");
    }
    delete(arg) {
        throw new Error("Method not implemented.");
    }
    visitUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield users_model_1.default.findOne({ id });
                const today = new Date();
                const todayString = today.toISOString().split('T')[0]; // Форматируем дату для сравнения
                const day = yield calendar_dates_model_1.default.findOne({ date: todayString });
                // Проверяем записи о посещениях
                let visit = yield visits_model_1.default.findOne({ user_id: user === null || user === void 0 ? void 0 : user.id });
                if (visit && !visit.calendar_ids.includes(day === null || day === void 0 ? void 0 : day.id)) {
                    visit.calendar_ids.push(day === null || day === void 0 ? void 0 : day.id); // Записываем идентификатор текущего дня
                    visit.calendar_ids.sort();
                    visit.is_open = true;
                    yield visit.save();
                    const calendar_info = yield calendar_dates_model_1.default.findOne({ id: day === null || day === void 0 ? void 0 : day.id });
                    const found_info = yield founds_model_1.default.findOne({ id: calendar_info === null || calendar_info === void 0 ? void 0 : calendar_info.found_id });
                    const on_visit = {
                        user: user === null || user === void 0 ? void 0 : user.id,
                        visit,
                        calendar_info,
                        found_info
                    };
                    return Promise.resolve(on_visit);
                }
            }
            catch (e) {
                return Promise.reject(e);
            }
        });
    }
}
exports.default = UserController;
