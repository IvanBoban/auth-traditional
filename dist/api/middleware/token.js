"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../../config"));
const tokenMiddleware = (req, res, next) => {
    if (req.headers.authorization !== config_1.default.auth.token) {
        res.status(401).json({ error: "Invalid token" });
        return;
    }
    next();
};
exports.default = tokenMiddleware;
//# sourceMappingURL=token.js.map