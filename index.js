const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const license = ["Apache License 2.0",
    "BSD 3-Clause",
    "BSD 2-Clause", 
    "GNU General Public License",
    "GNU Library", "Lesser General Public License (LGPL)",
    "MIT license",
    "Mozilla Public License 2.0",
    "Common Development and Distribution License",
    "Eclipse Public License version 2.0"];

// array of questions for user
const questions = [{
    type: "input",
    name: "tile",
    message: "What is the title?"
    }, {
    type: "input",
    name: "Description",
    message: "How would you describe your REPO?"
    },{
    type: "input",
    name: "Contents",
    message: "What are the contents?"
    },{
    type: "input",
    name: "Installation",
    message: "What is the installation instruction?"
    },{
    type: "input",
    name: "Usage",
    message: "What is the usage information?"
    },{
    type: "list",
    name: "License",
    message: "What type of license is being used?",
    choices: license
    },{
    type: "input",
    name: "Contributing",
    message: "If you have contributors, list them?"
    }, {
    type: "input",
    name: "Test",
    message: "Can you display a test?"
    },{
    type: "input",
    name: "Question",
    message: "Do you have any questions to display?"
    },{
    type: "input",
    name: "GitHub",
    message: "What is your GitHub username?"
    },{
    type: "input",
    name: "Email",
    message: "What is your email?"
    }
    ];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, err =>{
        if (err){
            console.log("Oops! do it again!")
        } else {
            console.log("All Good to Go!")
        }
    })
}

// function to initialize program
function init() {
        inquirer.prompt(questions).then((inquirerResponses)=> {
            writeToFile("ReadMe.md", generateMarkdown({...inquirerResponses}))
        })
}

// function call to initialize program
init();
