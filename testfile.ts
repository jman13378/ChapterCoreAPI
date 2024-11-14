import {API, Chapter, Message, User} from "./index"
import { Role } from "./objects/Role";

console.log(new Chapter("Chapter 1", "Chapter 1 content", "Chapter 1 state", [new Role()], ["setting1", "setting2"], "Advisor 1").getChapterId());
