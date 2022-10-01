"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
function envSelect(env = 'dev') {
    let pathDotEnv;
    switch (env) {
        case 'prod':
            pathDotEnv = '.env';
            break;
        case 'dev':
            pathDotEnv = '.env.test';
            break;
        default:
            throw new Error('The env params must be "dev" or "prod"');
    }
    dotenv_1.default.config({ path: path_1.default.resolve(process.cwd(), pathDotEnv) });
}
exports.default = envSelect;
