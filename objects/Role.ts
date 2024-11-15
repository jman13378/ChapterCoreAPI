export class Role {
    id: Number; // Unique identifier for the role
    name: string; // Name of the role

    /**
     * Constructor to initialize the Role object.
     * @param id - The unique identifier for the role.
     * @param name - The name of the role.
     */
    constructor(id: Number, name: string) {
        this.id = id;
        this.name = name;
    }

    /**
     * Converts the Role object to JSON format.
     * @returns The JSON representation of the Role object.
     */
    toJson(): any {
        return {
            id: this.id,
            name: this.name
        };
    }

    /**
     * Builds a Role object from JSON data.
     * @param json - The JSON data to build the Role object from.
     * @returns A Role object.
     */
    buildRoleFromJson(json: any): Role {
        return new Role(json.id, json.name);
    }

    /**
     * Builds a list of Role objects from JSON data.
     * @param json - The JSON data to build the list of Role objects from.
     * @returns An array of Role objects.
     */
    buildRoleListFromJson(json: any): Role[] {
        let roles: Role[] = [];
        for (let i = 0; i < json.length; i++) {
            roles.push(this.buildRoleFromJson(json[i]));
        }
        return roles;
    }  
}