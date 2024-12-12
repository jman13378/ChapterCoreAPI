import { User } from "./User.js";

/**
 * Profile class to represent a user's profile in the system.
 */
export class Profile {
    #bio: string; // Bio of the user
    #avatarUrl: string; // URL of the user's avatar

    /**
     * Constructor to initialize the Profile object.
     * @param bio - The bio of the user.
     * @param avatarUrl - The URL of the user's avatar.
     * @param json - The JSON object to initialize the Profile object from.
     */
    constructor(bio: string = "", avatarUrl: string =  "https://static-00.iconduck.com/assets.00/user-icon-1024x1024-dtzturco.png") {

        this.#bio = bio;
        this.#avatarUrl = avatarUrl;

    }

    /**
     * Converts the Profile object to JSON format.
     * @returns The JSON representation of the Profile object.
     */
    toJson(): any {
        return {
            bio: this.#bio,
            avatarUrl: this.#avatarUrl
        };
    }

    /**
     * Builds a Profile object from JSON data.
     * @param json - The JSON data to build the Profile object from.
     * @returns A Profile object.
     */
    static buildProfileFromJson(json: any): Profile {
        return new Profile(json.bio, json.avatarUrl);
    }

    /**
     * Builds a list of Profile objects from JSON data.
     * @param json - The JSON data to build the list of Profile objects from.
     * @returns An array of Profile objects.
     */
    static buildProfileListFromJson(json: any): Profile[] {
        let profiles: Profile[] = [];
        for (let i = 0; i < json.length; i++) {
            profiles.push(this.buildProfileFromJson(json[i]));
        }
        return profiles;
    }
}