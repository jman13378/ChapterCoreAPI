export class Role {
    #id: Number; // Unique identifier for the role
    #name: string; // Name of the role

    constructor(id: Number, name: string) {

        this.#id = id!;
        this.#name = name!;

    }

    toJson(): any {
        return {
            id: this.#id,
            name: this.#name
        };
    }
    getRoleId(): Number {
        return this.#id
    }
    getRoleName(): string {
        return this.#name;
    }
    static buildRoleFromJson(json: any): Role {
        return new Role(json.id, json.name);
    }

    static buildRoleListFromJson(json: any): Role[] {
        let roles: Role[] = [];
        if (json == undefined || json.length == 0) {
            return roles;
        }
        for (let i = 0; i < json.length; i++) {
            roles.push(this.buildRoleFromJson(json[i]));
        }
        return roles;
    }
}