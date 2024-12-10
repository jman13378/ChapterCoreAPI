export class Role {
    id: Number; // Unique identifier for the role
    name: string; // Name of the role

    constructor(id?: Number, name?: string, json?: { id: Number, name: string }) {
        if (json) {
            this.id = json.id;
            this.name = json.name;
        } else {
            this.id = id!;
            this.name = name!;
        }
    }

    toJson(): any {
        return {
            id: this.id,
            name: this.name
        };
    }

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