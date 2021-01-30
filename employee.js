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

async function addRole(){
    // This function proceeds once the viewAllDepartments query has been ran
    const departments = await db.viewAllDepartments();
    console.log(departments)
    // Populating our inquirer list choices with the departments in our sql database by calling .map on our array of sql objects
    const departmentChoices = departments.map(({ id, name }) => ({
        name: name,
        value: id
      }));
    
    const role = await inquirer.prompt([
        {
            type: 'input',
            name : 'title',
            message: "What role would you like to add?"
        },
        {
            type: 'input',
            name : 'salary',
            message: "What is the yearly salary?"
        },
        {
            type: 'list',
            name : 'department_id',
            message: "What department?",
            choices: departmentChoices
        },
    ]);
    await db.addRole(role)
    console.log('New role has been added')
    mainMenu()
}

async function addEmployee(){
    const roleChoice = await db.viewAllRoles();
    const showRoles = roleChoice.map(({ id, title }) => ({
        name: title,
        value: id
      }));

    const employee = await inquirer.prompt([
        {
            type: 'input',
            name : 'first_name',
            message : 'What is employees first name?'
        },
        {
            type: 'input',
            name : 'last_name',
            message : 'What is employees last name?'
        },
        {
            type: 'list',
            name : 'role_id',
            message : 'What role?',
            choices: showRoles
        },
        {
            type: 'input',
            name : 'manager_id',
            message : 'What is employees manager id?'
        },
    ])
    // Waits for the addemployee function to be completed
    await db.addEmployee(employee)
    console.log('New Employee added')
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