export class ChapterSettings {
    #chapterId: Number; // Chapter ID associated with the #settings
    #settings: Setting[]; // Settings of the chapter

    /**
     * Constructor to initialize the ChapterSettings object.
     * @param chapterId - The chapter ID associate with the settings.
     * @param settings - The settings of the chapter.
     */
    constructor(chapterId: Number, settings: Setting[]) {
        this.#chapterId = chapterId;
        this.#settings = settings;
    }

    /**
     * Converts the ChapterSettings object to JSON format.
     * @returns The JSON representation of the ChapterSettings object.
     */
    toJson(): any {
        return {
            chapterId: this.#chapterId,
            settings: this.#settings
        };
    }

    /**
     * Builds a ChapterSettings object from JSON data.
     * @param json - The JSON data to build the ChapterSettings object from.
     * @returns A ChapterSettings object.
     */
    static buildChapterSettingsFromJson(json: any): ChapterSettings {
        return new ChapterSettings(json.chapterId, Setting.buildSettingListFromJson(json.settings));
    }

    /**
     * Builds a list of ChapterSettings objects from JSON data.
     * @param json - The JSON data to build the list of ChapterSettings objects from.
     * @returns An array of ChapterSettings objects.
     */
    static buildChapterSettingsListFromJson(json: any): ChapterSettings[] {
        let chapterSettingsList: ChapterSettings[] = [];
        for (let i = 0; i < json.length; i++) {
            chapterSettingsList.push(this.buildChapterSettingsFromJson(json[i]));
        }
        return chapterSettingsList;
    }

    /**
     * Gets the chapter ID.
     * @returns The chapter ID.
     */
    getChapterId(): Number {
        return this.#chapterId;
    }

    /**
     * Gets the settings of the chapter.
     * @returns An array of settings.
     */
    getSettings(): Setting[] {
        return this.#settings;
    }
}

/**
 * Class representing a setting.
 */
export class Setting {
    #name: string; // Name of the setting
    #value: string; // Value of the setting

    /**
     * Constructor to initialize the Setting object.
     * @param name - The name of the setting.
     * @param value - The value of the setting.
     */
    constructor(name: string, value: string) {
        this.#name = name;
        this.#value = value;
    }

    /**
     * Converts the Setting object to JSON format.
     * @returns The JSON representation of the Setting object.
     */
    toJson(): any {
        return {
            name: this.#name,
            value: this.#value
        };
    }

    /**
     * Builds a Setting object from JSON data.
     * @param json - The JSON data to build the Setting object from.
     * @returns A Setting object.
     */
    static buildSettingFromJson(json: any): Setting {
        return new Setting(json.name, json.value);
    }

    /**
     * Builds a list of Setting objects from JSON data.
     * @param json - The JSON data to build the list of Setting objects from.
     * @returns An array of Setting objects.
     */
    static buildSettingListFromJson(json: any): Setting[] {
        let settings: Setting[] = [];
        for (let i = 0; i < json.length; i++) {
            settings.push(this.buildSettingFromJson(json[i]));
        }
        return settings;
    }

    /**
     * Gets the name of the setting.
     * @returns The name of the setting.
     */
    getName(): string {
        return this.#name;
    }

    /**
     * Gets the value of the setting.
     * @returns The value of the setting.
     */
    getValue(): string {
        return this.#value;
    }
}