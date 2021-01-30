const connection = require("./connection")

// Index.js file to store our queries.

class DB {
    constructor(connection) {
        this.connection = connection
    }

    viewAllDepartments() {
        return this.connection.query(
            `SELECT 
                department.id, 
                department.name
            FROM
                department
            ORDER BY
                department.id
            `
        )
    }

    viewAllRoles() {
        return this.connection.query(
            `SELECT 
                role.id, 
                role.title,
                role.salary,
                department.name AS department
            FROM
                 role 
            LEFT JOIN
                department ON role.department_id = department.id
            ORDER BY
                department.id 
            `
        )
    }


    addDepartment(department) {
        return this.connection.query(
            `INSERT INTO
                department
            SET
                ?
            `, department
        )
    }

    // Uses the department foreign key to display department and self referencing employee key to display managers.
    viewAllEmployees() {
        return this.connection.query(
            `SELECT 
                employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee 
            LEFT JOIN 
                role on employee.role_id = role.id 
            LEFT JOIN 
                department on role.department_id = department.id
            LEFT JOIN 
                employee manager on manager.id = employee.manager_id`
        )
    }

    addRole(role){
        
        return this.connection.query(
            `INSERT INTO
                role   
            SET
                ?
            ` , role
        )
    }

    
    addEmployee(employee){
        return this.connection.query(
            `INSERT INTO
                employee
            SET ?
            ` , employee
        )
    }

}

module.exports = new DB(connection);