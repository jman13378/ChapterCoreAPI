import { Chapter } from "./objects/Chapter.js"
import { Message } from "./objects/Message.js"
import { User,PublicInfo as UserPublicInfo } from "./objects/User.js"
import { Role } from "./objects/Role.js"
import { Profile as UserProfile } from "./objects/Profile.js"
import { Setting,ChapterSettings } from "./objects/ChapterSettings.js"
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
export  { Chapter, Message, User, Role, API, UserProfile,UserPublicInfo,Setting,ChapterSettings };
