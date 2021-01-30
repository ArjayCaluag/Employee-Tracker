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