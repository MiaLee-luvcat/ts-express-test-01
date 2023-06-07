"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const router_1 = require("./router");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4001;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.disable('x-powered-by');
app.use('/api', (0, router_1.apiRouter)());
app.get('/', (req, res) => {
    res.send('Typescript + Node.js + Express Server');
});
app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
