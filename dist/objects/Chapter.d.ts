import { Role } from "./Role";
export declare class Chapter {
    id: string;
    name: string;
    state: string;
    roles: Role[];
    settings: string[];
    advisorId: string;
    /**
     * Constructor to initialize the Chapter object.
     * @param id - The unique identifier for the chapter.
     * @param name - The name of the chapter.
     * @param state - The state of the chapter.
     * @param roles - The roles associated with the chapter.
     * @param settings - The settings of the chapter.
     * @param advisorId - The advisor ID associated with the chapter.
     * @param json - The JSON object to initialize the Chapter object from.
     */
    constructor(id?: string, name?: string, state?: string, roles?: Role[], settings?: string[], advisorId?: string, json?: {
        id: string;
        name: string;
        state: string;
        roles: Role[];
        settings: string[];
        advisorId: string;
    });
    static buildChapterFromJson(json: any): Chapter;
    static buildChapterListFromJson(json: any): Chapter[];
    static buildChapterFromJsonWithRoles(json: any): Chapter;
    /**
     * Get the unique identifier of the chapter.
     * @returns The chapter ID.
     */
    getChapterId(): string;
    /**
     * Get the name of the chapter.
     * @returns The name of the chapter.
     */
    getOrganizationName(): string;
    /**
     * Get the state of the chapter.
     * @returns The state of the chapter.
     */
    getState(): string;
    /**
     * Get the roles associated with the chapter.
     * @returns An array of Role objects.
     */
    getRoles(): Role[];
    /**
     * Get the settings of the chapter.
     * @returns An array of settings.
     */
    getSettings(): string[];
    /**
     * Get the advisor ID associated with the chapter.
     * @returns The advisor ID.
     */
    getAdvisorId(): string;
}
