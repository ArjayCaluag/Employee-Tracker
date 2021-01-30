const connection = require("./connection")

// Index.js file to store our queries.

class DB {
    constructor(connection) {
        this.connection = connection
    }


};

module.exports = new DB(connection);