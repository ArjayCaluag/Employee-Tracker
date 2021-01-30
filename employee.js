let inquirer = require("inquirer");
// const { async } = require("rxjs");

// requires eveyrthing in our db folder to operate
const db = require('./db');

// npm package that benefits the look of our console 
require('console.table');

// Executes viewAllDepartments search query in our index.js
// "\n used for visibility reasons"
async function viewAllDepartments() {
    const departments = await db.viewAllDepartments();
    console.log("\n")
    console.table(departments);
    mainMenu()
}

// Executes viewAllRoles search query in our index.js
async function viewAllRoles() {
    const roles = await db.viewAllRoles();
    console.log("\n")
    console.table(roles)
    mainMenu()
}

// Executes our addDepartment search query ONCE user completes inquirer prompt.
async function addDepartment() {
    const department = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Whats the name of the department?'
        }
    ])

    // Pass in values from our variable containing inquirer values to our query
    await db.addDepartment(department)
    console.log('Your new department has been added')
    mainMenu()
}

// Consoles all Employees once query is completed.
async function viewAllEmployees() {
    const employees = await db.viewAllEmployees();
    console.log("\n")
    console.table(employees)
    mainMenu();
}


// base function that will be used to start the application and passed in to the end of every other function unless called to quit.
function mainMenu() {
    inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                "viewAllDepartments",
                "viewAllRoles",
                "viewAllEmployees",
                "addDepartment",
                "addRole",
                "addEmployee",
                "updateEmployee",
                "Quit"
            ]
        },
        // Different switch cases that return their respective function
    ]).then(res => {
        switch (res.choice) {
            case "viewAllDepartments":
                return viewAllDepartments();
            case "viewAllRoles":
                return viewAllRoles();
            case "viewAllEmployees":
                return viewAllEmployees();
            case "addDepartment":
                return addDepartment();
            case "addRole":
                return addRole();
            case "addEmployee":
                return addEmployee();
            case "updateEmployee":
                return updateEmployee();
            case "Quit":
                break;

        }
    })
}

mainMenu();