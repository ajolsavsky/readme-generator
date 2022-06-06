// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { table } = require('console');
const markdown = require('./generateMarkdown');
const generateMarkdown = require('./generateMarkdown');

//TODO: Badges and license if-then
//TODO: Create usage video



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
        choices: ["Academic Free License v3.0", "Apache license 2.0", "Artistic license 2.0", "Boost Software License 1.0", "BSD 2-clause license", "BSD 3-clause license", "Creative Commons Zero v1.0 Universal", "Creative Commons Attribution 4.0", "Creative Commons Attribution Share Alike 4.0", "Do What The Fuck You Want To Public License", "Educational Community License v2.0", "Eclipse Public License 1.0", "Eclipse Public License 2.0", "European Union Public License 1.1", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU General Public License v3.0",  "GNU Lesser General Public License v2.1", "GNU Lesser General Public License v3.0", "ISC", "LaTeX Project Public License v1.3c", "Microsoft Public License",  "MIT", "Mozilla Public License 2.0", "Open Software License 3.0", "SIL Open Font License 1.1", "University of Illinois/NCSA Open Source License", "The Unlicense", "zLib License"]
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
        const readmeContent = generateMarkdown(data);

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
