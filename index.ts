import { Chapter } from "./objects/Chapter"
import { Message } from "./objects/Message"
import { User } from "./objects/User"
import { Role } from "./objects/Role"

import request from "axios"
export { Chapter, Message, User, Role }
const baseURL = "https://backend.chaptercore.org/";
const APIPath = "api/";



export class API {
    #token: String;
    constructor(token: String) {
        this.#token = token;
    }
}