"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sessionMiddleware = (req, res, next) => {
    if (!req.session.isPopulated) {
        res.status(403).json({ error: "Forbidden" });
        return;
    }
    if (req.session.isAuth !== true) {
        res.status(403).json({ error: "Forbidden" });
        return;
    }
    next();
};
exports.default = sessionMiddleware;
//# sourceMappingURL=session.js.map