export class Role {
    id: Number; // Unique identifier for the role
    name: string; // Name of the role

    /**
     * Constructor to initialize the Role object.
     * @param id - The unique identifier for the role.
     * @param name - The name of the role.
     * @param json - The JSON object to initialize the Role object from.
     */
    constructor(id?: Number, name?: string, json?: { id: Number, name: string }) {
        if (json) {
            this.id = json.id;
            this.name = json.name;
        } else {
            this.id = id!;
            this.name = name!;
        }
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
    static buildRoleFromJson(json: any): Role {
        return new Role(json.id, json.name);
    }
    static buildRoleListFromJson(json: any): Role[] {
        let roles: Role[] = [];
        for (let i = 0; i < json.length; i++) {
            roles.push(this.buildRoleFromJson(json[i]));
        }
        return roles;
    }
}