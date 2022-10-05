"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const utils_1 = require("./utils");
(0, utils_1.i18nextConfig)();
try {
    utils_1.console.log('port', process.env.PORT);
    server_1.default.listen(process.env.PORT || '3000');
}
catch (err) {
    utils_1.console.error(err);
}
