// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { table } = require('console');

//TODO: Badges and license if-then
//TODO: Create usage video

const generateREADME = ({ title, description, installation, usage, licenseBadge, license, contributing, tests, gitHub, email }) =>
`# ${title}

## Description
${description}
${licenseBadge}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation
${installation}

## Usage
${usage}

## License
${license}

## Contributing
${contributing}

## Tests
${tests}

## Questions
GitHub: [View my profile](https://github.com/${gitHub})
Email: ${email}
`;



// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter your README title',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter your DESCRIPTION',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter your INSTALLATION instructions',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter your USAGE instructions',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'What is your license?',
        name: 'license',
        choices: ['Apache License 2.0', 'MIT License', 'GNU GPLv3', 'ISC License']
    },
    {
        type: 'input',
        message: 'Enter your CONTRIBUTION guidelines',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Enter your TEST instructions',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Enter your GitHub Username',
        name: 'gitHub',
    },
    {
        type: 'input',
        message: 'Enter your email',
        name: 'email',
    },
];

inquirer
    .prompt(questions)
    .then((data) => {
        console.log(data.license === 'Apache License 2.0') {
            data.license === 'Apache License 2.0'
        }
        
        const readmeContent = generateREADME(data);

        fs.writeFile('README.md', readmeContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README!')
    );
    });

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// fs.writeFile('README.md', data, (err) =>
//     err ? console.error(err) : console.log('Success!')
// );

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
