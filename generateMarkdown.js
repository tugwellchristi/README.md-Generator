// Function that returns a license badge based on which license is passed in
// If there is no license, it returns an empty string
function renderLicenseBadge(license) {
  return `[License Badge for ${license}](https://img.shields.io/badge/license-${license}-green)`; 
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `[${license} License](https://opensource.org/licenses/)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return ` ## License Information

  This project includes the ${license} license.

  ${renderLicenseBadge(license)}
  ${renderLicenseLink(license)}
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}

  ## Project Description
  ${data.description}
  
  ## Table of Contents
  ${data.contents}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Additional Questions
  - GitHub username: ${data.github}
  - GitHub link: ${data.githublink}
  - Email address: ${data.email}
  `;
}

module.exports = generateMarkdown;
