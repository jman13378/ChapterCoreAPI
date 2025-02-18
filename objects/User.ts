import { Profile } from "./Profile.js";
import { Role } from "./Role.js";
import { Flags as UserFlags } from "./Flags.js";

/**
 * User class to represent a user in the system.
 */
export class User {
    #id: Number; // Unique identifier for the user
    #email: string; // Email address of the user
    #username: string; // Username of the user
    #chapterId: Number; // Chapter ID associated with the user
    #lastLogin: Number; // Last login time of the user
    #phone: Number; // Phone number of the user
    #profile: Profile; // Profile information of the user
    #roles: Role[]; // Roles assigned to the user
    #flags: number; // Flags associated with the user


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
     * @param flags - The flags associated with the user.
     */
    constructor(id: Number, email: string, username: string, chapterId: Number, lastLogin: Number, phone: Number, profile: Profile = new Profile(), roles: Role[] = [], flags: number = 0) {
        this.#id = id;
        this.#email = email;
        this.#username = username;
        this.#chapterId = chapterId;
        this.#lastLogin = lastLogin;
        this.#phone = phone;
        this.#profile = profile;
        this.#roles = roles;
        this.#flags = flags;
    }

    /**
     * Gets the profile of the user.
     * @returns The profile of the user.
     */
    getProfile(): Profile {
        return this.#profile || new Profile();
    }

    /**
     * Builds a User object from JSON data.
     * @param json - The JSON data to build the User object from.
     * @returns A User object.
     */
    static buildUserFromJson(json: any): User {
        return new User(json.id, json.email, json.username, json.chapterId, json.lastLogin, json.phone, ((json.profile == undefined || Object.keys(json.profile).length === 0) ? new Profile() : json.profile), json.roles, json.flags);
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
        if (user.getRoles().length < 0) {

            for (let i = 0; i < json.role.length; i++) {
                user.#roles.push(Role.buildRoleFromJson(json.role[i]));
            }
        }
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
            profile: this.#profile,
            flags: this.#flags
        };
    }

    /**
     * Converts the User object with roles to JSON format.
     * @returns The JSON representation of the User object with roles.
     */
    toJsonWithRole(): any {
        let roles: Role[] = []
        if (this.#roles.length < 0) {
            for (let i = 0; i < this.#roles.length; i++) {
                roles.push(this.#roles[i].toJson());
            }
        }
        return {
            id: this.#id,
            email: this.#email,
            username: this.#username,
            chapterId: this.#chapterId,
            lastLogin: this.#lastLogin,
            phone: this.#phone,
            profile: this.#profile,
            role: roles,
            flags: this.#flags
        };
    }

    /**
     * Gets the roles of the user.
     * @returns An array of Role objects.
     */
    getRoles(): Role[] {
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
    getLastLogin(): Number {
        return this.#lastLogin;
    }

    /**
     * Gets the phone number of the user.
     * @returns The phone number of the user.
     */
    getPhoneNumber(): Number {
        return this.#phone;
    }

    /**
     * Gets the flags associated with the user.
     * @returns The flags associated with the user.
     */
    getFlags(): Number {
        return this.#flags;
    }
    /**
      * Checks if a flag is set.
      * @param flag - The flag to check.
      * @returns True if the flag is set, false otherwise.
      */
    hasFlag(flag: UserFlags): boolean {
        return (this.#flags & flag) === flag;
    }
    /**
     * Sets a flag.
     * @param flag - The flag to set.
     */
    setFlag(flag: UserFlags): void {
        this.#flags |= flag;
    }
    /**
 * Clears a flag.
 * @param flag - The flag to clear.
 */
    clearFlag(flag: UserFlags): void {
        this.#flags &= ~flag;
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

    /**
     * Constructor to initialize the PublicInfo object.
     * @param user - The user object to extract public information from.
     */
    constructor(user: User) {
        this.#id = user.getId();
        this.#email = user.getEmail();
        this.#username = user.getUsername();
        this.#chapterId = user.getChapterId();
        this.#phone = user.getPhoneNumber();
        this.#profile = user.getProfile();
    }

    /**
     * Gets the unique identifier for the user.
     * @returns The unique identifier for the user.
     */
    getId(): Number {
        return this.#id;
    }

    /**
     * Gets the email address of the user.
     * @returns The email address of the user.
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
     * Gets the chapter ID associated with the user.
     * @returns The chapter ID associated with the user.
     */
    getChapterId(): Number {
        return this.#chapterId;
    }

    /**
     * Gets the phone number of the user.
     * @returns The phone number of the user.
     */
    getPhone(): Number {
        return this.#phone;
    }

    /**
     * Gets the profile information of the user.
     * @returns The profile information of the user.
     */
    getProfile(): Profile {
        return this.#profile;
    }
}