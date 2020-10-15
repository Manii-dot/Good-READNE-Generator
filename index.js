const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [{
    type: "input",
    name: "Git-Hub",
    message: "What is your Git-Hub username?"},
    {
    type: "input",
    name: "Description",
    message: "How would you describe your REPO?"
    }
    ];

// function to write README file
function writeToFile(fileName, data) {

}

// function to initialize program
function init() {
        inquirer.prompt(questions).then((inquirerResponses)=> {
            writeToFile("ReadMe.md", generateMarkdown({...inquirerResponses}))
        })
}

// function call to initialize program
init();
