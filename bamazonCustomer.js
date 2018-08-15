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

//Customer will then be prompted with 2 questions
function chooseProduct(productList){
    inquirer.prompt([
        {
            // The first prompt question asks the customer for the ID of the product that they would like to buy.
            type: "input",
            name: "id",
            message: "What is the ID of the product that you would like to buy?"
        },
        {
            // The second prompt question asks the customer how many units of the product they would like to buy.
            type: "input",
            name: "units",
            message: "How many units of the product would you like to buy?"
        }
        ]).then(function(idResponse){
            console.log('----------------------------------------------------------');
            // custProductID stores the id the customer specified after the first prompt
            custProductID = idResponse.id;
            // custProductUnits stores the units the customer specified after the first prompt
            custProductUnits = idResponse.units;

            // for each index i in the productList array
            for (i in productList){
                //if the custProductID matches an item_id in the productList array
                if (productList[i].item_id == custProductID){
                    productName = productList[i].product_name;
                    pIndex = i;
                    return checkUnits(productList, custProductUnits);
                }
            }
            //if the custProductID does not match an item_id in the productList array then the customer is asked if they want to select another item to buy or leave Bamazon
            inquirer.prompt([
            {
                type: "list",
                name: "action",
                message: `The product with the id: ${custProductID} does not exist. Please choose one of the options below:`,
                choices: ["Select another item to buy", "Leave Bamazon"]
            }
            ]).then(function(actionResponse){
                if(actionResponse.action == "Select another item to buy"){
                    console.log('----------------------------------------------------------');
                    chooseProduct(productList);
                }
                else{
                    // end connection to MySQL database if customer chooses 'Leave Bamazon'
                    connection.end();
                }
            });
    });
}

// Once the customer has placed the order, the checkUnits function checks if the store has enough of the product to meet the customer's request.
function checkUnits(productList, custProductUnits){  
    //if the store does have enough of the product, then fulfill the customer's order by updating the SQL database to reflect the remaining quantity.
    if(parseFloat(productList[pIndex].stock_quantity) >= parseFloat(custProductUnits)){
        price = parseFloat(custProductUnits) * parseFloat(productList[pIndex].price);
        updateProducts(productList[pIndex].stock_quantity, price, custProductUnits);
    }
    // If the store does not have enough of the product to meet the customer's request, the app notifies the customer of insufficient quantity, and then asks the user if they would like to specify another unit amount for the item they chose to purchase, select a different item to purchase, or leave bamazon.
    else{
        console.log('----------------------------------------------------------');
        console.log(`There is an insufficient quantity of ${productName} that you would like to buy.`)
        inquirer.prompt([
            {
                type: "list",
                name: "option",
                message: `Please choose an option from below`,
                choices: [`Specify a different amount of ${productName} to purchase that is less than or equal to ${productList[pIndex].stock_quantity} units`,"Select another item to buy", "Leave Bamazon"]
            }

            ]).then(function(optionResponse){
                console.log('----------------------------------------------------------');
                if(optionResponse.option == "Select another item to buy"){
                    chooseProduct(productList);
                }
                else if(optionResponse.option == "Leave Bamazon"){
                    connection.end();
                }
                else{
                    inquirer.prompt([
                        {
                            type: "input",
                            name: "units",
                            message: `How many units of the product ${productName} would you like to buy?`
                        }
                    ]).then(function(unitResponse){
                        custProductUnits = unitResponse.units;
                        checkUnits(productList, custProductUnits);
                    });
                }
            });

    }
}

//if the store does have enough of the product, then fulfill the customer's order by updating the SQL database to reflect the remaining quantity.
function updateProducts(stockQuantity, price, custProductUnits){
    var query = connection.query(
        "UPDATE products SET ? WHERE ?",
        [{
            stock_quantity: stockQuantity - custProductUnits
        },
        {
            item_id: custProductID
        }],function(error, updateResponse){
            if (error) throw error;
            var item = {
                item_name: productName,
                item_quantity: custProductUnits,
                item_price: price
            }
            cartArray.push(item);
            inquirer.prompt([
            {
                type: "list",
                name: "action",
                message: `Please choose what you would like to do next:`,
                choices: ["Select another item to buy", "Checkout", "Leave Bamazon"]
            }
            ]).then(function(actionResponse){
                if(actionResponse.action == "Select another item to buy"){
                    console.log('----------------------------------------------------------');
                    readProducts();
                }
                // if customer is ready to checkout, show the customer the total cost of their purchase.
                else if(actionResponse.action == "Checkout"){
                    var totalCost = 0;
                    console.log('----------------------------------------------------------');
                    console.log('--------------------- Your Order: ------------------------');
                    for (j in cartArray){
                        console.log(`Item #${parseInt(j)+1}: ${cartArray[j].item_name}    Units: ${cartArray[j].item_quantity}  price: $${cartArray[j].item_price}`);
                        console.log('----------------------------------------------------------');
                        totalCost += cartArray[j].item_price;
                    }
                    console.log('----------------------------------------------------------');
                    console.log(`The total cost of your purchase is: $${totalCost}`);
                    console.log('----------------------------------------------------------');
                    connection.end();
                }
                else{
                    // end connection to MySQL database if customer chooses 'Leave Bamazon'
                    connection.end();
                }
            });
        }
    );
}
