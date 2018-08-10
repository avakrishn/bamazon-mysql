# Bamazon

## Table of Contents
* [About this project](#about)
* [Getting Started](#start)
    * [Clone this repository](#clone)
    * [Install MySQL](#MySQL)
    * [Install Node.js](#node)
    * [Install the NPM packages](#npm)
* [Project Components](#components)
* [Running Bamazon from the command line](#command-line)


## <a id="about"></a> About this project

Bamazon is an Amazon-like storefront created using MySQL that takes in orders from customers and depletes stock from the store's inventory


## <a id="start"></a> Getting Started

To get started running Bamazon on your computer and/or contribute to this project, please perform the following steps:

1. [Clone this repository](#clone)
2. [Install MySQL](#MySQL)
3. [Install Node.js](#node)
4. [Install the NPM packages](#npm)

## <a id="clone-repository"></a> Clone this repository

Clone this project repository to a local directory on your computer by running the following commands in terminal when inside that directory:

* To Clone with HTTPS:
    ```
    git clone https://github.com/avakrishn/bamazon-mysql.git
    ``` 

* To Clone with SSH:
    ```
    git clone git@github.com:avakrishn/bamazon-mysql.git
    ```

## <a id="MySQL"></a> Install MySQL

* MySQL is an open source Relational Database Management System (RDBMS) that uses Structured Query Language (SQL) to add, access, and manage content in a database. 

* If you don't already have MySQL installed on your computer, you can download a free MySQL database at https://www.mysql.com/downloads/


## <a id="node"></a> Install Node.js

* Node.js is an open source server environment that uses JavaScript on the server and uses asynchronous programming. Node.js can generate dynamic page content, read and write to files on the server, collect form data, and can modify data in a database.

* If you don't already have Node.js installed on your computer, you can install the latest version here: https://nodejs.org/en/

## <a id="npm"></a> Install the NPM packages

* NPM is a package manager for Node.js packages, or modules.

* The following npm packages and their dependencies are used in this project. You must install these packages in the project root directory (bamazon-mysql) to be able to run Bamazon from the command line.

* After you clone the repository into a local directory, change directory to the project root directory (bamazon-mysql) and run the following command to install the required npm packages:

    ```
    npm install
    ```

* List of npm packages used in this project:

    1.  MySQL npm package (https://www.npmjs.com/package/mysql)
        * This is a node.js driver for mysql that allows access to the mySQL database. After connecting to the MySQL database we are able to query the database using SQL statements.
    2.  Inquirer npm package (https://www.npmjs.com/package/inquirer)
        * Inquirer.js is a command line interface for Node.js that enables a way to ask questions to users at the command line.

## <a id="components"></a> Project Components

In the project root directory (bamazon-mysql), the project directory structure is as follows:
1. [bamazon.sql](#bamazon-sql)
    * Creates the MySQL database called `bamazon_db` and creates a table inside this databasee called `products`.
    * The  `products` table includes the following columns:
        * item_id (unique id for each product)

        * product_name (Name of product)

        * department_name

        * price (cost to customer)

        * stock_quantity (how much of the product is available in stores)
    * There are 10 products in the `products` table

2. [bamazonCustomer](#bamazon-customer)
3. [package.json](#package)
4. [package-lock.json](#package-lock)
5. [node_modules](#node-modules)
6. [.gitignore](#gitignore) 

## <a id="command-line"></a> Running Bamazon from the command line
