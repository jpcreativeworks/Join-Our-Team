const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./library/Engineer");
const Intern = require("./library/Intern");
const Manager = require("./library/Manager");
let managerHTML = "";
let internHTML = "";
let engineerHTML = "";

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

        engineerHTML+= `<div class="card border-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">${newEngineer.name}</div>
        <div class="card-body text-primary">
          <h5 class="card-title">${newEngineer.getRole()}</h5>
          <p class="card-text">Id: ${newEngineer.id} <br> Email: ${newEngineer.email} <br> GitHub:  ${newEngineer.github}</p>
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

        internHTML += `
        <div class="card border-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">${newIntern.name}</div>
        <div class="card-body text-primary">
          <h5 class="card-title">${newIntern.getRole()}</h5>
          <p class="card-text">Id: ${newIntern.id} <br> Email: ${newIntern.email} <br> School:  ${newIntern.school}</p>
        </div>
      </div>`
        console.log(newIntern);
        requestEmployee()
    });
}

function addExit() {
    console.log('finished!')
    var completeHTML = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link href="./assets/style.css" rel="stylesheet">
    <title>Join Our Team</title>
</head>
<body>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container-fluid">
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand" href="#">Join our team!</a>
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#cards">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#instructions">Instructions</a>
      </li>                
    </ul>
  </div>
</div>
</nav>

<div id="cards" class="row">
          <div class="column mb-3">
              <div class="class card"></div>
          </div>
</div>
    
    <main class="container bg-light">
    ${managerHTML}
    ${internHTML}
    ${engineerHTML}               
    </main>
    <footer> <p id="instructions">
    Thanks for using Join Our Team! Use the prompts in running index.js from <a href="https://github.com/jpcreativeworks">GitHub</a>. If you have more questions, please feel free to reach out. 
    </p>
</footer>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>
</html>
    `
    fs.writeFileSync('index.html', completeHTML, function(err) {
        if (err) throw err;
    });
};
