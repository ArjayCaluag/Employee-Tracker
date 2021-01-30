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
};

module.exports = new DB(connection);