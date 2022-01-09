// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {type: 'input',
    message: 'What is the title of your project?',
    name: 'title'},
    {type: 'input',
    message: 'What inspired you to create this project?',
    name: 'inspired'},
    {type: 'input',
    message: 'What problem does it solve?',
    name: 'solve'},
    {type: 'input',
    message: 'What challenges did you experience?',
    name: 'challenges'},
    {type: 'input',
    message: 'What makes your project stand out?',
    name: 'special'},
    {type: 'input',
    message: 'What is your email address?',
    name: 'email'},
    {type: 'input',
    message: 'What is your GitHub username?',
    name: 'github'},
    {type: 'input',
    message: 'How can you be reached for additional questions?',
    name: 'questions'},
    {type: 'input',
    message: 'Instructions for installation:',
    name: 'installation'},
    {type: 'input',
    message: 'Instructions for usage:',
    name: 'usage'},
    {type: 'input',
    message: 'Steps if you want to contribute:',
    name: 'contributing'},
    {type: 'input',
    message: 'Test instructions:',
    name: 'tests'},
    {   type: 'list',
        name: 'license',
        message: 'Choose a license for your project: ',
        choices: [
          'Mozilla', 'Apache', 'MIT',
        ]}
    
    ]



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let content = generateMarkdown(data);
    fs.writeFile(fileName, content, function (err) {
        if(err){
            console.log(err)
        }else{
            console.log('success')
    }});
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        let fileName = 'README.md';
        writeToFile(fileName, data)
    })
}

// Function call to initialize app
init();
