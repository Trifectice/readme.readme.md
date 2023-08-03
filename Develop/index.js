// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  { type: 'input', name: 'title', message: 'Project title:' },
  { type: 'input', name: 'description', message: 'Description:' },
  { type: 'input', name: 'installation', message: 'Installation instructions:' },
  { type: 'input', name: 'usage', message: 'Usage information:' },
  { type: 'input', name: 'contributing', message: 'Contribution guidelines:' },
  { type: 'input', name: 'tests', message: 'Test instructions:' },
  { type: 'list', name: 'license', message: 'Choose a license:', choices: ['MIT', 'Apache', 'GNU', 'None'] },
  { type: 'input', name: 'github', message: 'GitHub username:' },
  { type: 'input', name: 'email', message: 'Email address:' }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) throw err;
    console.log('Generated README.md');
  });
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
![License](https://img.shields.io/badge/License-${data.license}-blue.svg)

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is covered under the ${data.license} license.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions, please reach out to [${data.github}](https://github.com/${data.github}) at ${data.email}.
  `;
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(answers => {
    const readmeContent = generateMarkdown(answers);
    writeToFile('README.md', readmeContent);
  });
}

// Function call to initialize app
init();
