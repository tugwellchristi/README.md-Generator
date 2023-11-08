// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({ title, description, contents, installation, usage, license, contributing, tests, questions}) =>
`## ${title}

## Project Description
${description}

## Table of Contents
${contents}

## Project Installation
${installation}

## Usage
${usage}

## License Information
This project includes the ${license}.

## Project Contributions
${contributing}

## Project Tests
${tests}

## Additional Questions
${questions}
`;



// Array of questions for user input
const questions = [ {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    section: 'description',
    message: 'Provide a detailed description of your project.',
  },
  {
    type: 'input',
    section: 'contents',
    message: 'Provide a table of contents for your project.',
  },
  {
    type: 'input',
    section: 'installation',
    message: 'Provide details about the installation of your project.',
  },
  {
    type: 'input',
    section: 'usage',
    message: 'Provide usage details about your project.',
  },
  {
    type: 'input',
    section: 'license',
    message: 'Provide license information for your project.',
  },
  {
    type: 'input',
    section: 'contributing',
    message: 'Provide contributing information about your project.',
  },
  {
    type: 'input',
    section: 'tests',
    message: 'Provide testing information for your project.',
  },
  {
    type: 'input',
    section: 'questions',
    message: 'Provide additional questions about the project',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
