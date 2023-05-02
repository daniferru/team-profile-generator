class QAEngineer {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return "QA Engineer";
    }
}

module.exports = QAEngineer;