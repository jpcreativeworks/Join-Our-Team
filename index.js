const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./library/Engineer");
const Intern = require("./library/Intern");
const Manager = require("./library/Manager");
let managerHTML = "";
let internHTML = "";
let engieerHTML = "";

function requestingManager() {
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
    ]).then(function (managerInput) {
        const newManager = new Manager(
            managerInput.managerName,
            managerInput.managerId,
            managerInput.managerEmail,
            managerInput.managerOfficeNum
        );

        managerHTML = `<div class="card border-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">${newManager.name}</div>
        <div class="card-body text-primary">
          <h5 class="card-title">${newManager.getRole()}</h5>
          <p class="card-text">Id: ${newManager.id} <br> Email: ${newManager.email} <br> Office:  ${newManager.officeNum}</p>
        </div>
      </div>`
        console.log(newManager);
        requestEmployee()
    });
}

function requestEmployee() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Are you an Intern or an Engineer?',
            choices: ['Engineer', 'Intern', 'Exit'],
            name: 'employeeChoice',

        }

    ])
        .then(function (employeeInput) {
            switch (employeeInput.employeeChoice) {
                case "Engineer":
                    addNewEngineer();
                    break;
                case "Intern":
                    addNewIntern();
                    break;
                default:
                    addExit();
                    break;
            }

        })
}

requestingManager();


function addNewEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter your name',
            name: 'engineerName'
        },
        {
            type: 'input',
            message: 'Enter your ID Number',
            name: 'engineerId'
        },
        {
            type: 'input',
            message: 'Enter your email',
            name: 'engineerEmail'
        },
        {
            type: 'input',
            message: 'what is your gitHub link?',
            name: 'engineerGitHub',
        },
    ]).then(function (engineerInput) {
        const newEngineer = new Engineer(
            engineerInput.engineerName,
            engineerInput.engineerId,
            engineerInput.engineerEmail,
            engineerInput.engineerGitHub
        );

        engineerHTML = `<div class="card border-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">${newEngineer.name}</div>
        <div class="card-body text-primary">
          <h5 class="card-title">${newEngineer.getRole()}</h5>
          <p class="card-text">Id: ${newEngineer.id} <br> Email: ${newEngineer.email} <br> Office:  ${newEngineer.GitHub}</p>
        </div>
      </div>`
        console.log(newEngineer);
        requestEmployee()
    });
}
function addNewIntern() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter your name',
            name: 'internName'
        },
        {
            type: 'input',
            message: 'Enter your ID Number',
            name: 'internId'
        },
        {
            type: 'input',
            message: 'Enter your email',
            name: 'internEmail'
        },
        {
            type: 'input',
            message: 'where did you go to school?',
            name: 'internSchool',
        },
    ]).then(function (internInput) {
        const newIntern = new Intern(
            internInput.internName,
            internInput.internId,
            internInput.internEmail,
            internInput.internSchool
        );

        internHTML = `<div class="card border-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">${newIntern.name}</div>
        <div class="card-body text-primary">
          <h5 class="card-title">${newIntern.getRole()}</h5>
          <p class="card-text">Id: ${newIntern.id} <br> Email: ${newIntern.email} <br> Office:  ${newIntern.school}</p>
        </div>
      </div>`
        console.log(newIntern);
        requestEmployee()
    });
}

function addExit() {
    console.log('finished!')
};
