"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const session_1 = __importDefault(require("../middleware/session"));
const route = express_1.Router();
exports.default = (app) => {
    app.use("/task", route);
    route.use(session_1.default);
    route.post("/create", (req, res) => { });
    route.post("/complete", (req, res) => { });
    route.get("/getTasks", (req, res) => { });
    route.delete("/delete", (req, res) => { });
};
//# sourceMappingURL=task.js.map