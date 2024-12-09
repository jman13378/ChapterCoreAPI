export declare class Role {
    id: Number;
    name: string;
    /**
     * Constructor to initialize the Role object.
     * @param id - The unique identifier for the role.
     * @param name - The name of the role.
     * @param json - The JSON object to initialize the Role object from.
     */
    constructor(id?: Number, name?: string, json?: {
        id: Number;
        name: string;
    });
    /**
     * Converts the Role object to JSON format.
     * @returns The JSON representation of the Role object.
     */
    toJson(): any;
    /**
     * Builds a Role object from JSON data.
     * @param json - The JSON data to build the Role object from.
     * @returns A Role object.
     */
    static buildRoleFromJson(json: any): Role;
    static buildRoleListFromJson(json: any): Role[];
}
