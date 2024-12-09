"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chapter = void 0;
const Role_1 = require("./Role");
class Chapter {
    id; // Unique identifier for the chapter
    name; // Name of the chapter
    state; // State of the chapter
    roles; // Roles associated with the chapter
    settings; // Settings of the chapter
    advisorId; // Advisor ID associated with the chapter
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
    constructor(id, name, state, roles, settings, advisorId, json) {
        if (json) {
            this.id = json.id;
            this.name = json.name;
            this.state = json.state;
            this.roles = json.roles;
            this.settings = json.settings;
            this.advisorId = json.advisorId;
        }
        else {
            this.id = id;
            this.name = name;
            this.state = state;
            this.roles = roles;
            this.settings = settings;
            this.advisorId = advisorId;
        }
    }
    static buildChapterFromJson(json) {
        return new Chapter(json.id, json.name, json.state, json.roles, json.settings, json.advisorId);
    }
    static buildChapterListFromJson(json) {
        let chapters = [];
        for (let i = 0; i < json.length; i++) {
            chapters.push(this.buildChapterFromJson(json[i]));
        }
        return chapters;
    }
    static buildChapterFromJsonWithRoles(json) {
        return new Chapter(json.id, json.name, json.state, Role_1.Role.buildRoleListFromJson(json.roles), json.settings, json.advisorId);
    }
    /**
     * Get the unique identifier of the chapter.
     * @returns The chapter ID.
     */
    getChapterId() {
        return this.id;
    }
    /**
     * Get the name of the chapter.
     * @returns The name of the chapter.
     */
    getOrganizationName() {
        return this.name;
    }
    /**
     * Get the state of the chapter.
     * @returns The state of the chapter.
     */
    getState() {
        return this.state;
    }
    /**
     * Get the roles associated with the chapter.
     * @returns An array of Role objects.
     */
    getRoles() {
        return this.roles;
    }
    /**
     * Get the settings of the chapter.
     * @returns An array of settings.
     */
    getSettings() {
        return this.settings;
    }
    /**
     * Get the advisor ID associated with the chapter.
     * @returns The advisor ID.
     */
    getAdvisorId() {
        return this.advisorId;
    }
}
exports.Chapter = Chapter;
