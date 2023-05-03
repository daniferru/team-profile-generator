const ProjectManager = require("./projectmanager");

class SoftwareDeveloper extends ProjectManager{
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Software Developer";
    }
}

module.exports = SoftwareDeveloper;