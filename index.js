const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// array of questions for user
const questions = [
    {
        name: "username",
        message: "What is your Github user name?"
    },
    {
        name: "email",
        message: "What is your email?"
    },
    {
        name: "title",
        message: "What is your project titled?"
    },
    {
        name: "description",
        message: "Please wite a short description of your project"
    },
    {
        type: "list",
        name: "license",
        message: "What license does your project have?",
        choices: ["MIT", "Apache", "Apache2", "GPL", "BSD", "None"]
    },
    {
        name: "install",
        message: "What command did you use to install dependencies?",
        default: "npm i"
    },
    {
        name: "userinfo",
        message: "What does the user need to know about using your project?"
    },
    {
        name: "tests",
        message: "what are your testing instructions?"
    },
    {
        name: "contribute",
        message: "How can a user contribute to your project?"
    },

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log(`&{fileName} saved.`)
    })
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            writeToFile(answers.title + "README.md", generateMarkdown(answers));
        })

}

// function call to initialize program
init();
