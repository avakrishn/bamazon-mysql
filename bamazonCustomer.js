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


//--------------------------------------------------Functions

//Running this application will first display all of the items available for sale. Including the ids, names, and prices of products for sale.
function readProducts() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM products", function(error, productList){
        if (error) throw error;
        // Log the productList array which contains the data from products table that was queried by using the SELECT SQL statement
        console.log('----------------------------------------------------------');
        console.log(productList);
        console.log('----------------------------------------------------------');
        chooseProduct(productList);
    });
}
