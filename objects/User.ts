import { Role } from "./Role";

export class User {
    id: Number;
    email: string;
    username: string;
    chapterId: Number;
    lastLogin: string;
    phone: Number;
    profile: string;

    /**
     * Constructor to initialize the User object.
     * @param id - The unique identifier for the user.
     * @param email - The email address of the user.
     * @param username - The username of the user.
     * @param chapterId - The identifier for the chapter.
     * @param lastLogin - The last login time of the user.
     * @param phone - The phone number of the user.
     * @param profile - The profile description of the user.
     */
    constructor(id: Number, email: string, username: string, chapterId: Number, lastLogin: string, phone: Number, profile: string) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.chapterId = chapterId;
        this.lastLogin = lastLogin;
        this.phone = phone;
        this.profile = profile;
    }
}