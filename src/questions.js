const softwareDeveloperQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the software engineer\'s name?',
        validate: function (input) {
            if (!input) {
                return 'Enter a name.';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the software engineer\'s ID?',
        validate: function (input) {
            if (!input) {
                return 'Enter a valid ID.';
            }
            return true;
    }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the software engineer\'s email?',
        validate: function (input) {
            if (!input) {
                return 'Enter a valid email.';
            }
            return true;
    }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the software engineer\'s GitHub username?',
        validate: function (input) {
            if (!input) {
                return 'Enter a valid GitHub username.';
            }
            return true;
    }
    }
];

const scrumMasterQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the scrum master\'s name?',
        validate: function (input) {
            if (!input) {
                return 'Enter a name.';
            }
            return true;
    }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the scrum master\'s ID?',
        validate: function (input) {
            if (!input) {
                return 'Enter a valid ID.';
            }
            return true;
    }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the scrum master\'s email?',
        validate: function (input) {
            if (!input) {
                return 'Enter a valid email.';
            }
            return true;
    }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the scrum master\'s GitHub?',
        validate: function (input) {
            if (!input) {
                return 'Enter a valid GitHub username.';
            }
            return true;
    }
    }
];

const QAengineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the QA engineer\'s name?',
        validate: function (input) {
            if (!input) {
                return 'Enter a name.';
            }
            return true;
    }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the QA engineer\'s ID?',
        validate: function (input) {
            if (!input) {
                return 'Enter a valid ID.';
            }
            return true;
    }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the QA engineer\'s email?',
        validate: function (input) {
            if (!input) {
                return 'Enter a valid email.';
            }
            return true;
    }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the QA engineer\'s GitHub?',
        validate: function (input) {
            if (!input) {
                return 'Enter a valid GitHub username.';
            }
            return true;
    }
    }
];

const projectManagerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the project manager\'s name?',
        validate: function (input) {
            if (!input) {
                return 'Enter a name.';
            }
            return true;
    }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the project manager\'s ID?',
        validate: function (input) {
            if (!input) {
                return 'Enter a valid ID.';
            }
            return true;
    }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the project manager\'s email?',
        validate: function (input) {
            if (!input) {
                return 'Enter a valid email.';
            }
            return true;
    }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the project manager\'s office number?',
        validate: function (input) {
            if (!input) {
                return 'Enter a valid office number.';
            }
            return true;
    }
    }
];

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the intern\'s name?',
        validate: function (input) {
            if (!input) {
                return 'Enter a name.';
            }
            return true;
    }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the intern\'s ID?',
        validate: function (input) {
            if (!input) {
                return 'Enter a valid ID.';
            }
            return true;
    }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the intern\'s email?',
        validate: function (input) {
            if (!input) {
                return 'Enter a valid email.';
            }
            return true;
    }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the intern\'s GitHub?',
        validate: function (input) {
            if (!input) {
                return 'Enter a valid GitHub username.';
            }
            return true;
    }
    },
];