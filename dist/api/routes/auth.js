"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route = express_1.Router();
exports.default = (app) => {
    app.use("/auth", route);
    route.post("/signIn", (req, res) => {
        res.status(200).send({ isAuth: true });
    });
    route.post("/signUp", (req, res) => { });
    route.post("/signOut", (req, res) => {
        req.session.isAuth = true;
        res.status(200).send({ isAuth: false });
    });
    route.get("/checkSession", (req, res) => { });
    route.delete("/deleteAccount", (req, res) => { });
};
//# sourceMappingURL=auth.js.map