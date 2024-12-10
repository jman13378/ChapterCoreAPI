import { User } from "./User";

/**
 * Profile class to represent a user's profile in the system.
 */
export class Profile {
    userId: Number; // User ID associated with the profile
    bio: string; // Bio of the user
    avatarUrl: string; // URL of the user's avatar

    /**
     * Constructor to initialize the Profile object.
     * @param userId - The user ID associated with the profile.
     * @param bio - The bio of the user.
     * @param avatarUrl - The URL of the user's avatar.
     * @param json - The JSON object to initialize the Profile object from.
     */
    constructor(userId?: Number, bio?: string, avatarUrl?: string, json?: { id: Number, userId: Number, bio: string, avatarUrl: string }) {
        if (json) {
            this.userId = json.userId;
            this.bio = json.bio;
            this.avatarUrl = json.avatarUrl;
        } else {
            this.userId = userId!;
            this.bio = bio!;
            this.avatarUrl = avatarUrl!;
        }
    }

    /**
     * Converts the Profile object to JSON format.
     * @returns The JSON representation of the Profile object.
     */
    toJson(): any {
        return {
            userId: this.userId,
            bio: this.bio,
            avatarUrl: this.avatarUrl
        };
    }

    /**
     * Builds a Profile object from JSON data.
     * @param json - The JSON data to build the Profile object from.
     * @returns A Profile object.
     */
    static buildProfileFromJson(json: any): Profile {
        return new Profile(json.id, json.userId, json.bio, json.avatarUrl);
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