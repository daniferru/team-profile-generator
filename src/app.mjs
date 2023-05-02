import fs from 'fs';
import inquirer from 'inquirer';
import { generateMarkdown } from './generateMarkdown.mjs';
import SoftwareDeveloper from '../lib/softwaredeveloper.js';
import ScrumMaster from '../lib/scrummaster.js';
import QAEngineer from '../lib/QAengineer.js';
import ProjectManager from '../lib/projectmanager.js';
import Designer from '../lib/projectmanager.js';
import generateHTML from './generateHTML.mjs';

const promptTeamProfile = async() => {
    const {teamProfile} = await inquirer.prompt({
        type: 'input',
        message: "What is your team's name?",
        name: 'teamProfile',
    });
    return teamProfile;
};

const employee = [];

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

    const answers = await inquirer.prompt(QAEngineerQuestions);
    const QAengineer = new (answers.name, answers.id, answers.email, answers.github);
    employees.push(QAengineer);
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
    ];

    const answers = await inquirer.prompt(projectManagerQuestions);
    const projectManager = new ProjectManager(answers.name, answers.id, answers.email, answers.github);
    employees.push(projectManager);
}

async function createDesigner() {
    const designerQuestions = [
        {
        type: 'input',
        name: 'name',
        message: "What is the UX/UI designer's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the UX/UI designer's ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the UX/UI designer's email?",
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the UX/UI designer's GitHub username?",
        },
        
    ];

    const answers = await inquirer.prompt(designerQuestions);
    const designer = new Designer(answers.name, answers.id, answers.email, answers.github);
    employees.push(designer);
}

const markdown = generateMarkdown(employees);
fs.writeFile('output/profile.md', markdown, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Succesfully created profile.md in the output folder');
    }
});

const html = generateHTML(employees);
fs.writeFile('output/profile.html', html, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Successfully created profile.html in the output folder.');
    }
});

createTeamProfile();