// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Function to generate the README.md file and the content that will be included
const generateREADME = ({ projectName, description, installation, usage, license, contributing, tests, github, githublink, email}) =>

// Content that will be displayed on the generated README.md file once the user completes the prompted items
`# ${projectName}
* ${license} license

## Project Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License Information](Licence Information)


## Installation
${installation}

## Usage
${usage}

## Contributing
${contributing}

## Tests
${tests}

## Questions
- GitHub username: ${github}
- GitHub link: ${githublink}
- Email address: ${email}

## License 
This project is covered with the ${license} license.
`;

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
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project.',
    choices: ['MIT', 'GPL', 'Apache', 'No license']
  },
])
// Callback function that takes the users answers and then writes the content to generate the README.md file
.then((answers) => {
    const READMEContent = generateREADME(answers);

    // If an error occurs, it is written to the console. Otherwise, it logs a "Success" message
    fs.writeFile('README.md', READMEContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!') 
    );
});

