"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.slidesDev = exports.docsDev = exports.slidesAdmin = exports.docsAdmin = exports.urls = exports.mongo = exports.es = exports.en = void 0;
var locales_1 = require("./locales");
Object.defineProperty(exports, "en", { enumerable: true, get: function () { return locales_1.en; } });
Object.defineProperty(exports, "es", { enumerable: true, get: function () { return locales_1.es; } });
var mongo_1 = require("./mongo");
Object.defineProperty(exports, "mongo", { enumerable: true, get: function () { return mongo_1.config; } });
var urls_json_1 = require("./urls.json");
Object.defineProperty(exports, "urls", { enumerable: true, get: function () { return __importDefault(urls_json_1).default; } });
var notes_1 = require("./notes");
Object.defineProperty(exports, "docsAdmin", { enumerable: true, get: function () { return notes_1.docsAdmin; } });
Object.defineProperty(exports, "slidesAdmin", { enumerable: true, get: function () { return notes_1.slidesAdmin; } });
Object.defineProperty(exports, "docsDev", { enumerable: true, get: function () { return notes_1.docsDev; } });
Object.defineProperty(exports, "slidesDev", { enumerable: true, get: function () { return notes_1.slidesDev; } });
