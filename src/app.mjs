import fs from 'fs';
import inquirer from 'inquirer';
import { generateMarkdown } from './generateMarkdown.mjs';
import SoftwareDeveloper from '../lib/softwaredeveloper.js';
import ScrumMaster from '../lib/scrummaster.js';
import QAEngineer from '../lib/QAengineer.js';
import ProjectManager from '../lib/projectmanager.js';
import Intern from '../lib/intern.js';
import generateHTML from './generateHTML.mjs';

const promptTeamProfile = async() => {
    const teamProfile = await inquirer.prompt([
        {
            type: 'input',
            message: "What is your team's name?",
            name: 'teamProfile',
        },
        {
            type: "list",
            name: "userChoice",
            message: "What would you like to do?",
            choices: ["Add Software Developer", "Add Scrum Master", "Add QA Engineer", "Add Project Manager", "Add Intern", "Create Team"]
        }
    ]);

    if(teamProfile.userChoice === "Add Software Developer") {
        createSoftwareDeveloper();
    } else if (teamProfile.userChoice === "Add QA Engineer") {
        createQAEngineer();
    } else if (teamProfile.userChoice === "Add Project Manager") {
        createProjectManger();
    } else if (teamProfile.userChoice === "Add Intern") {
        createIntern();
    }

    return teamProfile;
};

const propmtWhatNext = async () => {
    const userSelect = await inquirer.prompt(
        {
            type: "list",
            name: "userChoice",
            message: "What would you like to do?",
            choices: ["Add Software Developer", "Add Scrum Master", "Add QA Engineer", "Add Project Manager", "Add Intern", "Create Team"]
        }
    );
    
    if(userSelect.userChoice === "Add Software Developer") {
        createSoftwareDeveloper();
    } else if (userSelect.userChoice === "Add Scrum Master") {
        createScrumMaster();
    } else if (userSelect.userChoice === "Add QA Engineer") {
        createQAEngineer();
    } else if (userSelect.userChoice === "Add Project Manager") {
        createProjectManger();
    } else if (userSelect.userChoice === "Add Intern") {
        createIntern();
    } else if(userSelect.userChoice === "Create Team") {
        createTeam();
    }

}

const employees = [];

async function createSoftwareDeveloper() {
    const softwareDeveloperQuestions = [
        {
        type: 'input',
        name: 'name',
        message: "What is the software developer's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the software developer's ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the software developer's email?",
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the software developer's GitHub username?",
        },
        
    ];

    const answers = await inquirer.prompt(softwareDeveloperQuestions);
    const softwareDeveloper = new SoftwareDeveloper(answers.name, answers.id, answers.email, answers.github);
    employees.push(softwareDeveloper);
    propmtWhatNext();
}

async function createScrumMaster() {
    const scrumMasterQuestions = [
        {
        type: 'input',
        name: 'name',
        message: "What is the scrum master's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the scrum master's ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the scrum master's email?",
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the scrum master's GitHub username?",
        },
        
    ];

    const answers = await inquirer.prompt(scrumMasterQuestions);
    const scrumMaster = new ScrumMaster(answers.name, answers.id, answers.email, answers.github);
    employees.push(scrumMaster);
    propmtWhatNext();
}

async function createQAEngineer() {
    const QAengineerQuestions = [
        {
        type: 'input',
        name: 'name',
        message: "What is the QA engineer's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the QA engineer's ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the QA engineer's email?",
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the QA engineer's GitHub username?",
        },
        
    ];

    const answers = await inquirer.prompt(QAengineerQuestions);
    const QAengineer = new QAEngineer(answers.name, answers.id, answers.email, answers.github);
    employees.push(QAengineer);
    propmtWhatNext();
}

async function createProjectManger() {
    const projectManagerQuestions = [
        {
        type: 'input',
        name: 'name',
        message: "What is the prroject manager's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the prroject manager's ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the prroject manager's email?",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the project manager's office number?",
          },
    ];

    const answers = await inquirer.prompt(projectManagerQuestions);
    const projectManager = new ProjectManager(answers.name, answers.id, answers.email, answers.officeNumber);
    employees.push(projectManager);
    propmtWhatNext();
}

async function createIntern() {
    const internQuestions = [
        {
        type: 'input',
        name: 'name',
        message: "What is the intern's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the intern's ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email?",
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the intern's GitHub username?",
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the intern's school?",
        },
    ];

    const answers = await inquirer.prompt(internQuestions);
    const intern = new Intern(answers.name, answers.id, answers.email, answers.github, answers.school);
    employees.push(intern);
    propmtWhatNext();
}

function createTeam() {

    const markdown = generateMarkdown(employees);
    fs.writeFile('../output/profile.md', markdown, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Succesfully created profile.md in the output folder');
        }
    });
    
    const html = generateHTML(employees);
    fs.writeFile('../output/profile.html', html, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Successfully created profile.html in the output folder.');
        }
    });
}

promptTeamProfile();