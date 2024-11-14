export class Chapter {
    id: string;
    name: string;
    state: string;
    roles: string[];
    settings: string[];
    advisorId: string;
    constructor(id: string, name: string, state: string, roles: string[], settings: string[], advisorId: string) {
        this.id = id
        this.name = name
        this.state = state
        this.roles = roles
        this.settings = settings
        this.advisorId = advisorId
    }
    getChapterId() {
        return this.id
    }
    getOrganizationName() {
        return this.name
    }
    getState() {
        return this.state
    }
    getRoles() {
        return this.roles
    }
    getSettings() {
        return this.settings
    }
    getAdvisorId() {
        return this.advisorId
    }
    

}