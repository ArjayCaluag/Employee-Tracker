var mysql = require("mysql");


var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "password",
    database: "employee_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    startCommand()

});

