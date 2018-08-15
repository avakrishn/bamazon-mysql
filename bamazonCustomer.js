//Install and Require mySQL and Inquirer npm packages
var mysql = require("mysql");
var inquirer = require("inquirer");

//Read and set any environment variables with the dotenv package.
require("dotenv").config();

//--------------------------------------------------Global Variables
var custProductID, custProductUnits, productName, pIndex;
var cartArray = [];

//--------------------------------------------------Create connection to MySQL database
var connection = mysql.createConnection({

    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: process.env.MYSQL_PASSWORD,
    database: "bamazon_db"
});

//--------------------------------------------------Connect to MySQL database
connection.connect(function(error) {
    if (error) {
        throw error;
    } else {
        console.log("connected as id " + connection.threadId + "\n");
        readProducts();
    }
});