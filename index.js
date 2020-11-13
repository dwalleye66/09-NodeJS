const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');


// array of questions for user
const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email", 
        message: "What is your email",
    },
    {
        type: "input",
        name: "Project Name",
        message: "What is the name of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Write a short desciption of your project ",
    },
    {
        type: "input",
        name: "",
        message: "",
    }


];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
