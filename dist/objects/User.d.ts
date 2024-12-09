import { Role } from "./Role";
/**
 * User class to represent a user in the system.
 */
export declare class User {
    id: Number;
    email: string;
    username: string;
    chapterId: Number;
    lastLogin: string;
    phone: Number;
    profile: string;
    roles: Role[];
    /**
     * Constructor to initialize the User object.
     * @param id - The unique identifier for the user.
     * @param email - The email address of the user.
     * @param username - The username of the user.
     * @param chapterId - The identifier for the chapter.
     * @param lastLogin - The last login time of the user.
     * @param phone - The phone number of the user.
     * @param profile - The profile description of the user.
     * @param roles - The roles assigned to the user.
     * @param json - The JSON object to initialize the User object from.
     */
    constructor(id?: Number, email?: string, username?: string, chapterId?: Number, lastLogin?: string, phone?: Number, profile?: string, roles?: Role[], json?: {
        id: Number;
        email: string;
        username: string;
        chapterId: Number;
        lastLogin: string;
        phone: Number;
        profile: string;
        roles: Role[];
    });
    /**
     * Builds a User object from JSON data.
     * @param json - The JSON data to build the User object from.
     * @returns A User object.
     */
    static buildUserFromJson(json: any): User;
    /**
     * Builds a list of User objects from JSON data.
     * @param json - The JSON data to build the list of User objects from.
     * @returns An array of User objects.
     */
    static buildUserListFromJson(json: any): User[];
    /**
     * Builds a User object with roles from JSON data.
     * @param json - The JSON data to build the User object from.
     * @returns A User object with roles.
     */
    static buildUserFromJsonWithRole(json: any): User;
    /**
     * Builds a list of User objects with roles from JSON data.
     * @param json - The JSON data to build the list of User objects from.
     * @returns An array of User objects with roles.
     */
    static buildUserListFromJsonWithRole(json: any): User[];
    /**
     * Converts the User object to JSON format.
     * @returns The JSON representation of the User object.
     */
    toJson(): any;
    /**
     * Converts the User object with roles to JSON format.
     * @returns The JSON representation of the User object with roles.
     */
    toJsonWithRole(): any;
    /**
     * Gets the roles of the user.
     * @returns An array of Role objects.
     */
    getRole(): Role[];
    /**
     * Gets the ID of the user.
     * @returns The ID of the user.
     */
    getId(): Number;
    /**
     * Gets the email of the user.
     * @returns The email of the user.
     */
    getEmail(): string;
    /**
     * Gets the username of the user.
     * @returns The username of the user.
     */
    getUsername(): string;
    /**
     * Gets the chapter ID of the user.
     * @returns The chapter ID of the user.
     */
    getChapterId(): Number;
    /**
     * Gets the last login time of the user.
     * @returns The last login time of the user.
     */
    getLastLogin(): string;
}
