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
}

addDepartment(department){
    return this.connection.query(
        `INSERT INTO
            department
        SET
            ?
        `, department
    )
}


module.exports = new DB(connection);