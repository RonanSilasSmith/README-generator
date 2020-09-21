const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const getData = require("./utils/getData")
const generateTemplate = require("./src/readmeTemplate")

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your project\'s name?'
    },
    {
        type: 'input',
        name: 'license',
        message: 'what license is your project using?'

    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project'
    },
    {
        type: 'input',
        name: 'contributers',
        message: 'Who contributed to your project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?(if applicable)'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'what tests can you run to verify this works?'
    },
    {
        type: 'input',
        name: 'contact',
        message: 'What is your email adress?'
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    getData(questions)
    .then(generateTemplate)
    .then(generateMarkdown)
}

// function call to initialize program
init();