"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Todo_1 = require("../types/Todo");
const TodoModel = new mongoose_1.default.Schema({
    userId: {
        type: String,
    },
    name: String,
    status: {
        type: Todo_1.TodoStatus,
        default: Todo_1.TodoStatus.INCOMPLETE,
    },
    dateCreated: Date,
});
exports.default = mongoose_1.default.model("Todos", TodoModel);
//# sourceMappingURL=Todo.js.map