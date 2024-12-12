import { ChapterSettings } from "./ChapterSettings.js";
import { Role } from "./Role.js";

export class Chapter {
    #id: Number; // Unique identifier for the chapter
    #name: string; // Name of the chapter
    #state: string; // State of the chapter
    #roles: Role[]; // Roles associated with the chapter
    #settings: ChapterSettings; // Settings of the chapter
    #advisorId: Number; // Advisor ID associated with the chapter

    /**
     * Constructor to initialize the Chapter object.
     * @param id - The unique identifier for the chapter.
     * @param name - The name of the chapter.
     * @param state - The state of the chapter.
     * @param roles - The roles associated with the chapter.
     * @param settings - The settings of the chapter.
     * @param advisorId - The advisor ID associated with the chapter.
     */
    constructor(id: Number, name: string, state: string, roles: Role[], settings: ChapterSettings, advisorId: Number) {
        this.#id = id;
        this.#name = name;
        this.#state = state;
        this.#roles = roles;
        this.#settings = settings;
        this.#advisorId = advisorId;
    }

    /**
     * Builds a Chapter object from JSON data.
     * @param json - The JSON data to build the Chapter object from.
     * @returns A Chapter object.
     */
    static buildChapterFromJson(json: any): Chapter {
        return new Chapter(json.id, json.name, json.state, json.roles, json.settings, json.advisorId);
    }

    static buildChapterListFromJson(json: any): Chapter[] {
        let chapters: Chapter[] = [];
        for (let i = 0; i < json.length; i++) {
            chapters.push(this.buildChapterFromJson(json[i]));
        }
        return chapters;
    }

    static buildChapterFromJsonWithRoles(json: any): Chapter {
        return new Chapter(json.id, json.name, json.state, Role.buildRoleListFromJson(json.roles), json.settings, json.advisorId);
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
    getSettings(): ChapterSettings {
        return this.#settings;
    }

    /**
     * Gets the advisor ID associated with the chapter.
     * @returns The advisor ID associated with the chapter.
     */
    getAdvisorId(): Number {
        return this.#advisorId;
    }
}