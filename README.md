# Bamazon

## Table of Contents
* [About this project](#about)
* [Getting Started](#start)
    * [Clone this repository](#clone)
    * [Install MySQL](#MySQL)
    * [Install Node.js](#node)
    * [Install the NPM packages](#npm)
* [Project Components](#components)
    * [bamazon.sql](#bamazon-sql)
    * [bamazonCustomer.js](#bamazon-customer)
    * [package.json](#package)
    * [package-lock.json](#package-lock)
    * [node_modules](#node-modules)
    * [.gitignore](#gitignore)
* [Running Bamazon from the command line](#command-line)


## <a id="about"></a> About this project

**Bamazon** is an Amazon-like storefront created using MySQL that takes in orders from customers and depletes stock from the store's inventory


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

* **MySQL** is an open source Relational Database Management System (RDBMS) that uses Structured Query Language (SQL) to add, access, and manage content in a database. 

* If you don't already have MySQL installed on your computer, you can download a free MySQL database at https://www.mysql.com/downloads/


## <a id="node"></a> Install Node.js

* **Node.js** is an open source server environment that uses JavaScript on the server and uses asynchronous programming. Node.js can generate dynamic page content, read and write to files on the server, collect form data, and can modify data in a database.

* If you don't already have Node.js installed on your computer, you can install the latest version here: https://nodejs.org/en/

## <a id="npm"></a> Install the NPM packages

* **NPM** is a package manager for Node.js packages, or modules.

* The following npm packages and their dependencies are used in this project. You must install these packages in the project root directory (bamazon-mysql) to be able to run Bamazon from the command line.

* After you clone the repository into a local directory, change directory to the project root directory (bamazon-mysql) and run the following command to install the required npm packages:

    ```
    npm install
    ```

* List of npm packages used in this project:

    1.  **MySQL npm package** (https://www.npmjs.com/package/mysql)
        * This is a node.js driver for mysql that allows access to the mySQL database. After connecting to the MySQL database we are able to query the database using SQL statements.
    2.  **Inquirer npm package** (https://www.npmjs.com/package/inquirer)
        * Inquirer.js is a command line interface for Node.js that enables a way to ask questions to users at the command line.

## <a id="components"></a> Project Components

In the project root directory (bamazon-mysql), the project directory structure is as follows:
1. <a id="bamazon-sql"></a> **bamazon.sql**
    * Using SQL statements, creates the MySQL database called `bamazon_db` and specifies the use of this database.
    * Again using SQL statements, creates a table inside this database called `products`, which includes the following columns:
        * item_id (unique id for each product)

        * product_name (Name of product)

        * department_name

        * price (cost to customer)

        * stock_quantity (how much of the product is available in stores)
    * There are 10 products in the `products` table

2. <a id="bamazon-customer"></a> **bamazonCustomer.js**

    * Running this application will first display all of the items available for sale. Including the ids, names, and prices of products for sale.

3. <a id="package"></a>**package.json** 
4. <a id="package-lock"></a>**package-lock.json** 
5. <a id="node-modules"></a>**node_modules** 
6. <a id="gitignore"></a>**.gitignore** 

## <a id="command-line"></a> Running Bamazon from the command line

**Customer Flow**

![Customer Flow 1](https://raw.githubusercontent.com/avakrishn/bamazon-mysql/master/assets/images/customer-flow-1.png)

![Customer Flow 2](https://raw.githubusercontent.com/avakrishn/bamazon-mysql/master/assets/images/customer-flow-2.png)

![Customer Flow 3](https://raw.githubusercontent.com/avakrishn/bamazon-mysql/master/assets/images/customer-flow-3.png)

![Customer Flow 4](https://raw.githubusercontent.com/avakrishn/bamazon-mysql/master/assets/images/customer-flow-4.png)

![Customer Flow 5](https://raw.githubusercontent.com/avakrishn/bamazon-mysql/master/assets/images/customer-flow-5.png)

![Customer Flow 6](https://raw.githubusercontent.com/avakrishn/bamazon-mysql/master/assets/images/customer-flow-6.png)


### **Future Code Development:**
* Source code will be developed over time to handle new features in the future.

### **Issues:**
* If you find an issue while using the app or have a request, <a href="https://github.com/avakrishn/bamazon-mysql/issues" target="_blank">log the issue or request here</a>. These issues will be addressed in a future code update.
