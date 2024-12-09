"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API = exports.Role = exports.User = exports.Message = exports.Chapter = void 0;
const Chapter_1 = require("./objects/Chapter");
Object.defineProperty(exports, "Chapter", { enumerable: true, get: function () { return Chapter_1.Chapter; } });
const Message_1 = require("./objects/Message");
Object.defineProperty(exports, "Message", { enumerable: true, get: function () { return Message_1.Message; } });
const User_1 = require("./objects/User");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return User_1.User; } });
const Role_1 = require("./objects/Role");
Object.defineProperty(exports, "Role", { enumerable: true, get: function () { return Role_1.Role; } });
const baseURL = "https://backend.chaptercore.org/";
const APIPath = "api/";
class API {
    #token;
    constructor(token) {
        this.#token = token;
    }
}
exports.API = API;
