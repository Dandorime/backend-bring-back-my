"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const test_schema_1 = __importDefault(require("../../db/schema/test.schema"));
const Test = mongoose_1.default.model('Test', test_schema_1.default);
test_schema_1.default.pre('save', function (next) {
    var currentDate = new Date();
    this.updated_at = currentDate;
    if (!this.created_at)
        this.created_at = currentDate;
    var sno = 1;
    var test = this;
    Test.find({}, function (err, users) {
        if (err)
            throw err;
        sno = users.length + 1;
        test.id = sno;
        next();
    });
});
exports.default = Test;
