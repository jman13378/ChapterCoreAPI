import { Role } from "./Role.js";
import { Flags as ChapterFlags } from "./Flags.js";
import defaults from './../defaults/chapter_settings.json';

export class Chapter {
    #id: number; // Unique identifier for the chapter
    #name: string; // Name of the chapter
    #state: string; // State of the chapter
    #roles: Role[]; // Roles associated with the chapter
    #settings: object; // Settings of the chapter
    #flags: number; // Flags associated with the chapter

    /**
     * Constructor to initialize the Chapter object.
     * @param id - The unique identifier for the chapter.
     * @param name - The name of the chapter.
     * @param state - The state of the chapter.
     * @param roles - The roles associated with the chapter.
     * @param settings - The settings of the chapter.
     * @param flags - The flags associated with the chapter.
     */
    constructor(id: number, name: string, state: string, roles: Role[], settings: object, flags: number = 0) {
        this.#id = id;
        this.#name = name;
        this.#state = state;
        this.#roles = roles;
        this.#settings = settings;
        this.#flags = flags;
    }

    /**
     * Builds a Chapter object from JSON data.
     * @param json - The JSON data to build the Chapter object from.
     * @returns A Chapter object.
     */
    static buildChapterFromJson(json: any): Chapter {
        return new Chapter(json.id, json.name, json.state, json.roles, json.settings, json.flags);
    }

    static buildChapterListFromJson(json: any): Chapter[] {
        let chapters: Chapter[] = [];
        for (let i = 0; i < json.length; i++) {
            chapters.push(this.buildChapterFromJson(json[i]));
        }
        return chapters;
    }

    static buildChapterFromJsonWithRoles(json: any): Chapter {
        return new Chapter(json.id, json.name, json.state, Role.buildRoleListFromJson(json.roles), json.settings, json.flags);
    }
    toJson(): any {
        return {
            id: this.#id,
            name: this.#name,
            state: this.#state,
            roles: this.#roles,
            settings: this.#settings,
            flags: this.#flags
        };
    }
    toJsonWithRoles(): any {
        let roles = []
        if (this.#roles == undefined || this.#roles.length == 0) {
            for (let role of this.#roles) {
                roles.push(role.toJson())
            }
        }
        return {
            id: this.#id,
            name: this.#name,
            state: this.#state,
            roles: roles,
            settings: this.#settings,
            flags: this.#flags
        };
    }

    /**
     * Gets the unique identifier for the chapter.
     * @returns The unique identifier for the chapter.
     */
    getId(): Number {
        return this.#id;
    }

    /**
     * Gets the name of the chapter.
     * @returns The name of the chapter.
     */
    getName(): string {
        return this.#name;
    }

    /**
     * Gets the state of the chapter.
     * @returns The state of the chapter.
     */
    getState(): string {
        return this.#state;
    }

    /**
     * Gets the roles associated with the chapter.
     * @returns The roles associated with the chapter.
     */
    getRoles(): Role[] {
        return this.#roles;
    }

    /**
     * Gets the settings of the chapter.
     * @returns The settings of the chapter.
     */
    getSettings(): object {
        return this.#settings;
    }


    /**
     * Gets the flags associated with the chapter.
     * @returns The flags associated with the chapter.
     */
    getFlags(): number {
        return this.#flags;
    }

    /**
     * Checks if a flag is set.
     * @param flag - The flag to check.
     * @returns True if the flag is set, false otherwise.
     */
    hasFlag(flag: ChapterFlags): boolean {
        return (this.#flags & flag) === flag;
    }
    /**
 * Sets a flag.
 * @param flag - The flag to set.
 */
    setFlag(flag: ChapterFlags): void {
        this.#flags |= flag;
    }
    /**
 * Clears a flag.
 * @param flag - The flag to clear.
 */
    clearFlag(flag: ChapterFlags): void {
        this.#flags &= ~flag;
    }
}