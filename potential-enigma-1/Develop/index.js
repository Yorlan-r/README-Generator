// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    name: "user_name",
    type: "input",
    message: "What is your name?",
  },
  {
    name: "email",
    type: "list",
    message: "What is your Email?",
    choices: ["Test@test.com", "Test@gmail.com", "Yuh"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.createPromptModule(questions).then((answer) => {
    console.log("Hello " + answer.username);
    console.log(`Your Email is ${answer.email}`);
  });
}

// Function call to initialize app
init();
