"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const Role_1 = require("./Role");
/**
 * User class to represent a user in the system.
 */
class User {
    id; // Unique identifier for the user
    email; // Email address of the user
    username; // Username of the user
    chapterId; // Chapter ID associated with the user
    lastLogin; // Last login time of the user
    phone; // Phone number of the user
    profile; // Profile information of the user
    roles; // Roles assigned to the user
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
    constructor(id, email, username, chapterId, lastLogin, phone, profile, roles = [], json) {
        if (json) {
            this.id = json.id;
            this.email = json.email;
            this.username = json.username;
            this.chapterId = json.chapterId;
            this.lastLogin = json.lastLogin;
            this.phone = json.phone;
            this.profile = json.profile;
            this.roles = json.roles;
        }
        else {
            this.id = id;
            this.email = email;
            this.username = username;
            this.chapterId = chapterId;
            this.lastLogin = lastLogin;
            this.phone = phone;
            this.profile = profile;
            this.roles = roles;
        }
    }
    /**
     * Builds a User object from JSON data.
     * @param json - The JSON data to build the User object from.
     * @returns A User object.
     */
    static buildUserFromJson(json) {
        return new User(json.id, json.email, json.username, json.chapterId, json.lastLogin, json.phone, json.profile);
    }
    /**
     * Builds a list of User objects from JSON data.
     * @param json - The JSON data to build the list of User objects from.
     * @returns An array of User objects.
     */
    static buildUserListFromJson(json) {
        let users = [];
        for (let i = 0; i < json.length; i++) {
            users.push(this.buildUserFromJson(json[i]));
        }
        return users;
    }
    /**
     * Builds a User object with roles from JSON data.
     * @param json - The JSON data to build the User object from.
     * @returns A User object with roles.
     */
    static buildUserFromJsonWithRole(json) {
        let user = this.buildUserFromJson(json);
        user.roles.push(new Role_1.Role(json.role.id, json.role.name));
        return user;
    }
    /**
     * Builds a list of User objects with roles from JSON data.
     * @param json - The JSON data to build the list of User objects from.
     * @returns An array of User objects with roles.
     */
    static buildUserListFromJsonWithRole(json) {
        let users = [];
        for (let i = 0; i < json.length; i++) {
            users.push(this.buildUserFromJsonWithRole(json[i]));
        }
        return users;
    }
    /**
     * Converts the User object to JSON format.
     * @returns The JSON representation of the User object.
     */
    toJson() {
        return {
            id: this.id,
            email: this.email,
            username: this.username,
            chapterId: this.chapterId,
            lastLogin: this.lastLogin,
            phone: this.phone,
            profile: this.profile
        };
    }
    /**
     * Converts the User object with roles to JSON format.
     * @returns The JSON representation of the User object with roles.
     */
    toJsonWithRole() {
        let roles = [];
        this.roles.forEach((e) => {
            roles.push(e.toJson());
        });
        return {
            id: this.id,
            email: this.email,
            username: this.username,
            chapterId: this.chapterId,
            lastLogin: this.lastLogin,
            phone: this.phone,
            profile: this.profile,
            role: roles
        };
    }
    /**
     * Gets the roles of the user.
     * @returns An array of Role objects.
     */
    getRole() {
        return this.roles;
    }
    /**
     * Gets the ID of the user.
     * @returns The ID of the user.
     */
    getId() {
        return this.id;
    }
    /**
     * Gets the email of the user.
     * @returns The email of the user.
     */
    getEmail() {
        return this.email;
    }
    /**
     * Gets the username of the user.
     * @returns The username of the user.
     */
    getUsername() {
        return this.username;
    }
    /**
     * Gets the chapter ID of the user.
     * @returns The chapter ID of the user.
     */
    getChapterId() {
        return this.chapterId;
    }
    /**
     * Gets the last login time of the user.
     * @returns The last login time of the user.
     */
    getLastLogin() {
        return this.lastLogin;
    }
}
exports.User = User;
