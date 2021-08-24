"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    port: process.env.PORT,
    auth: {
        token: process.env.AUTH_TOKEN,
    },
    session: {
        sessionSecret: process.env.SESSION_SECRET,
        keySecret: process.env.KEY_SECRET,
    },
    mongo: {
        host: process.env.MONGO_HOST,
        port: process.env.MONGO_PORT,
        password: process.env.MONGO_PASSWORD,
    },
};
//# sourceMappingURL=index.js.map