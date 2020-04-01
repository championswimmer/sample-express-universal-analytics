"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_universal_analytics_1 = __importDefault(require("express-universal-analytics"));
const app = express_1.default();
app.use(express_universal_analytics_1.default({
    uaCode: 'UA-1234567-1',
    cookieName: '_ga'
}));
app.get('/', (req, res) => {
    var _a;
    (_a = req.visitor) === null || _a === void 0 ? void 0 : _a.setUid('111');
    res.send('Hello World');
});
app.listen(3333, () => {
    console.log('server started on http://localhost:3333');
});
//# sourceMappingURL=server.js.map