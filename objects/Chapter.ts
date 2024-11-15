import { Role } from "./Role";

export class Chapter {
    id: string; // Unique identifier for the chapter
    name: string; // Name of the chapter
    state: string; // State of the chapter
    roles: Role[]; // Roles associated with the chapter
    settings: string[]; // Settings of the chapter
    advisorId: string; // Advisor ID associated with the chapter

    /**
     * Constructor to initialize the Chapter object.
     * @param id - The unique identifier for the chapter.
     * @param name - The name of the chapter.
     * @param state - The state of the chapter.
     * @param roles - The roles associated with the chapter.
     * @param settings - The settings of the chapter.
     * @param advisorId - The advisor ID associated with the chapter.
     */
    constructor(id: string, name: string, state: string, roles: Role[], settings: string[], advisorId: string) {
        this.id = id;
        this.name = name;
        this.state = state;
        this.roles = roles;
        this.settings = settings;
        this.advisorId = advisorId;
    }

    /**
     * Get the unique identifier of the chapter.
     * @returns The chapter ID.
     */
    getChapterId(): string {
        return this.id;
    }

    /**
     * Get the name of the chapter.
     * @returns The name of the chapter.
     */
    getOrganizationName(): string {
        return this.name;
    }

    /**
     * Get the state of the chapter.
     * @returns The state of the chapter.
     */
    getState(): string {
        return this.state;
    }

    /**
     * Get the roles associated with the chapter.
     * @returns An array of Role objects.
     */
    getRoles(): Role[] {
        return this.roles;
    }

    /**
     * Get the settings of the chapter.
     * @returns An array of settings.
     */
    getSettings(): string[] {
        return this.settings;
    }

    /**
     * Get the advisor ID associated with the chapter.
     * @returns The advisor ID.
     */
    getAdvisorId(): string {
        return this.advisorId;
    }
}