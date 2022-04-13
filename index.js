const inquirer = require ("inquirer");
const fs = require ("fs");
const Engineer = require("./library/Engineer");
const Intern = require("./library/Intern");
const Manager = require("./library/Manager");

function requestingManager(){
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter your name',
            name: 'managerName'
        },
        {
            type: 'input',
            message: 'Enter your ID Number',
            name: 'managerId'
        },
        {
            type: 'input',
            message: 'Enter your email',
            name: 'managerEmail'
        },
        {
            type: 'input',
            message: 'Enter your office number',
            name: 'managerOfficeNum'
        },
    ]) .then(function(managerInput){
        const newManager = new Manager(
            managerInput.managerName,
            managerInput.managerID,
            managerInput.managerEmail,
            managerInput.managerOfficeNum
        ); 
        console.log(newManager);
    })
}

function requestEmployee() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Are you an Intern or an Engineer?',
            choices: ['Engineer', 'Intern', 'Exit'],
            name: 'employeeChoice',

        },
    ]) .then(function(employeeInput){
            switch(employeeInput.employeeChoice){
                case "Engineer":
                    addNewEngineer();
                    break;
                case "Intern":
                    addNewIntern();
                    break;
                default:
                    addExit();
                    break;
            };
            
    })
}