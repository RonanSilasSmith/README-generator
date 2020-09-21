const inquirer = require("inquirer");

getData = (questions) => {
    return inquirer.prompt(questions)
}

module.exports = getData;