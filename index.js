// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
var fs = require("fs");

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "github",
      message: "Please enter your GitHub Username (Required)",
      validate: (githubInput) => {
        if (githubInput) {
          return true;
        } else {
          console.log("Please enter your GitHub username!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "title",
      message: "What is your project title? (Required)",
      validate: (projectTitle) => {
        if (projectTitle) {
          return true;
        } else {
          console.log("Please enter your project title!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Provide a short description of your project (Required)",
      validate: (projectDescription) => {
        if (projectDescription) {
          return true;
        } else {
          console.log("Please enter your project description.");
          return false;
        }
      },
    },
    {
      type: "checkbox",
      name: "languages",
      message: "What did you build this project with? (Check all that apply)",
      choices: [
        "Javascript",
        "HTML",
        "CSS",
        "ES6",
        "jQuery",
        "Bootstrap",
        "Node.js",
      ],
    },
    {
      type: "list",
      name: "license",
      message: "Please select a license for your project (Required):",
      choices: [
        "MIT",
        "APACHE(2.0)",
        "GPL(3.0)",
        "BSD(3)",
        "MPL(2.0)",
        "CDDL(1.0)",
        "EPL(2.0)",
        "None",
      ],
      validate: (projectLicense) => {
        if (projectLicense) {
          return true;
        } else {
          console.log("Please choose a project license type!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "installation",
      message: "What command(s) should be run to install dependencies?",
      default: "npm install",
    },
    {
      type: "input",
      name: "test",
      message: "What command(s) should be run to run tests?",
      default: "npm test",
    },
    {
      type: "input",
      name: "usage",
      message: "What does the user need to know about using the repo?",
    },
    {
      type: "input",
      name: "website",
      message: "Please enter your project website (Required)",
      validate: (projectWebsite) => {
        if (projectWebsite) {
          return true;
        } else {
          console.log("Please enter your project website!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What's your email address? (Required)",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter your email!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "contributing",
      message: "Please enter the contributor name(s) for this project:",
      validate: (contributorName) => {
        if (contributorName) {
          return true;
        } else {
          console.log("Please enter contributor(s) name!");
          return false;
        }
      },
    },
  ]);
};

// TODO: Create a function to write README file
const writeToFile = (data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./generatedREADME.md", data, (err) => {
      if (err) {
        reject(err);
        // return out of function here so Promise doesn't accidentally execute resolve()
        return;
      }
      // if everything went well, resolve Promise and send successful data to .then()
      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
};

// TODO: Create a function to initialize app
function init() {
  questions()
    .then((response) => generateMarkdown(response))
    .then((res) => {
      writeToFile(res);
      console.log("Success! Check out your generatedREADME.md");
    });
}

// Function call to initialize app
init();
