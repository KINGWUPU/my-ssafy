const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    // aws ip
    host: "54.180.114.28",
    // mysql username
    user:"ssafy",
    // mysql user password
    password:"ssafy_1234",
    // db name
    database: "ssafy",
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0,
});

module.exports = {pool};