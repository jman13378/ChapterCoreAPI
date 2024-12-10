import { Chapter } from "./objects/Chapter"
import { Message } from "./objects/Message"
import { User,PublicInfo as UserPublicInfo } from "./objects/User"
import { Role } from "./objects/Role"
import { Profile as UserProfile } from "./objects/Profile"

import request from "axios"
const baseURL = "https://backend.chaptercore.org/";
const APIPath = "api/";



class API {
    #token: String;
    constructor(token: String) {
        this.#token = token;
    }
}
// Export all of the necessary classes
export { Chapter, Message, User, Role, API, UserProfile,UserPublicInfo }
