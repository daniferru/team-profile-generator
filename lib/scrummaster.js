class ScrumMaster {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Scrum Master";
    }
}

module.exports = ScrumMaster;