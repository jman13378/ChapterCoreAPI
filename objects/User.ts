import { Profile } from "./Profile.js";
import { Role } from "./Role.js";

/**
 * User class to represent a user in the system.
 */
export class User {
    #id: Number; // Unique identifier for the user
    #email: string; // Email address of the user
    #username: string; // Username of the user
    #chapterId: Number; // Chapter ID associated with the user
    #lastLogin: string; // Last login time of the user
    #phone: Number; // Phone number of the user
    #profile: Profile; // Profile information of the user
    #roles: Role[]; // Roles assigned to the user

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
    constructor(id?: Number, email?: string, username?: string, chapterId?: Number, lastLogin?: string, phone?: Number, profile?: string, roles: Role[] = [], json?: { id: Number, email: string, username: string, chapterId: Number, lastLogin: string, phone: Number, profile: string, roles: Role[] }) {
        if (json) {
            this.#id = json.id;
            this.#email = json.email;
            this.#username = json.username;
            this.#chapterId = json.chapterId;
            this.#lastLogin = json.lastLogin;
            this.#phone = json.phone;
            this.#profile = Profile.buildProfileFromJson(json);
            this.#roles = json.roles;
        } else {
            this.#id = id;
            this.#email = email;
            this.#username = username;
            this.#chapterId = chapterId;
            this.#lastLogin = lastLogin;
            this.#phone = phone;
            if (profile) {
                let json: { UserId: number, bio: string, avatarURL: string } = JSON.parse(profile)
                this.#profile = new Profile(json.UserId, json.bio, json.avatarURL);
            } else this.#profile = new Profile();
            this.#roles = roles;
        }


    }
    /**
             * Gets the profile of the user.
             * @returns The profile of the user.
             */
    getProfile(): Profile {
        return this.#profile;
    }
    /**
     * Builds a User object from JSON data.
     * @param json - The JSON data to build the User object from.
     * @returns A User object.
     */
    static buildUserFromJson(json: any): User {
        return new User(json.id, json.email, json.username, json.chapterId, json.lastLogin, json.phone, json.profile);
    }

    /**
     * Builds a list of User objects from JSON data.
     * @param json - The JSON data to build the list of User objects from.
     * @returns An array of User objects.
     */
    static buildUserListFromJson(json: any): User[] {
        let users: User[] = [];
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
    static buildUserFromJsonWithRole(json: any): User {
        let user = this.buildUserFromJson(json);
        user.#roles.push(new Role(json.role.id, json.role.name));
        return user;
    }

    /**
     * Builds a list of User objects with roles from JSON data.
     * @param json - The JSON data to build the list of User objects from.
     * @returns An array of User objects with roles.
     */
    static buildUserListFromJsonWithRole(json: any): User[] {
        let users: User[] = [];
        for (let i = 0; i < json.length; i++) {
            users.push(this.buildUserFromJsonWithRole(json[i]));
        }
        return users;
    }

    /**
     * Converts the User object to JSON format.
     * @returns The JSON representation of the User object.
     */
    toJson(): any {
        return {
            id: this.#id,
            email: this.#email,
            username: this.#username,
            chapterId: this.#chapterId,
            lastLogin: this.#lastLogin,
            phone: this.#phone,
            profile: this.#profile
        };
    }

    /**
     * Converts the User object with roles to JSON format.
     * @returns The JSON representation of the User object with roles.
     */
    toJsonWithRole(): any {
        let roles: Role[] = []
        this.#roles.forEach((e) => {
            roles.push(e.toJson())
        })
        return {
            id: this.#id,
            email: this.#email,
            username: this.#username,
            chapterId: this.#chapterId,
            lastLogin: this.#lastLogin,
            phone: this.#phone,
            profile: this.#profile,
            role: roles
        };
    }

    /**
     * Gets the roles of the user.
     * @returns An array of Role objects.
     */
    getRole(): Role[] {
        return this.#roles;
    }

    /**
     * Gets the ID of the user.
     * @returns The ID of the user.
     */
    getId(): Number {
        return this.#id;
    }

    /**
     * Gets the email of the user.
     * @returns The email of the user.
     */
    getEmail(): string {
        return this.#email;
    }

    /**
     * Gets the username of the user.
     * @returns The username of the user.
     */
    getUsername(): string {
        return this.#username;
    }

    /**
     * Gets the chapter ID of the user.
     * @returns The chapter ID of the user.
     */
    getChapterId(): Number {
        return this.#chapterId;
    }

    /**
     * Gets the last login time of the user.
     * @returns The last login time of the user.
     */
    getLastLogin(): string {
        return this.#lastLogin;
    }

    /**
     * Gets the phone number of the user.
     * @returns The phone number of the user.
     */
    getPhoneNumber(): Number {
        return this.#phone;
    }


    getPublicInfo(): any {
        return {
            id: this.#id,
            email: this.#email,
            username: this.#username,
            chapterId: this.#chapterId,
            phone: this.#phone,
            profile: this.#profile
        };
    }
}
export class PublicInfo {
    #id: Number; // Unique identifier for the user
    #email: string; // Email address of the user
    #username: string; // Username of the user
    #chapterId: Number; // Chapter ID associated with the user
    #phone: Number; // Phone number of the user
    #profile: Profile; // Profile information of the user

    constructor(user: User) {
        this.#id = user.getId();
        this.#email = user.getEmail();
        this.#username = user.getUsername();
        this.#chapterId = user.getChapterId();
        this.#phone = user.getPhoneNumber();
        this.#profile = user.getProfile();
    }

    getId(): Number {
        return this.#id;
    }

    getEmail(): string {
        return this.#email;
    }

    getUsername(): string {
        return this.#username;
    }

    getChapterId(): Number {
        return this.#chapterId;
    }

    getPhone(): Number {
        return this.#phone;
    }

    getProfile(): Profile {
        return this.#profile;
    }
}