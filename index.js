// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({ projectName, description, contents, installation, usage, license, contributing, tests, github, githublink, email}) =>
`# ${projectName}

## Project Description
${description}

## Table of Contents
${contents}

## Installation
${installation}

## Usage
${usage}

## License Information
This project includes the ${license}.

## Contributing
${contributing}

## Tests
${tests}

## Additional Questions
- GitHub username: ${github}
- GitHub link: ${githublink}
- Email address: ${email}
`;



// Array of questions for user input
inquirer
.prompt([ {
    type: 'input',
    name: 'projectName',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a detailed description of your project.',
  },
  {
    type: 'input',
    name: 'contents',
    message: 'Provide a table of contents for your project.',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide details about the installation of your project.',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage details about your project.',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide contributing information about your project.',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide testing information for your project.',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'githublink',
    message: 'What is the link to your GitHub profile?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'license',
    message: 'Provide license information for your project.',
  },
])
.then((answers) => {
    const READMEContent = generateREADME(answers);

    fs.writeFile('README.md', READMEContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!') 
    );
});
// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
