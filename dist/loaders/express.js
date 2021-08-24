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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const token_1 = __importDefault(require("../api/middleware/token"));
const api_1 = __importDefault(require("../api"));
const config_1 = __importDefault(require("../config"));
const cookie_session_1 = __importDefault(require("cookie-session"));
exports.default = ({ app }) => __awaiter(void 0, void 0, void 0, function* () {
    app.use(token_1.default);
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use(express_1.default.json());
    app.set("trust proxy", 1); // trust first proxy
    app.use(cookie_session_1.default({
        name: "auth-session",
        keys: [config_1.default.session.sessionSecret, config_1.default.session.keySecret],
    }));
    app.use(cors_1.default({
        origin: "*",
    }));
    app.use("/api", api_1.default());
    return app;
});
//# sourceMappingURL=express.js.map