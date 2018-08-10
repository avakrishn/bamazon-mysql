DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
	item_id INT NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(255) NOT NULL,
    department_name VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NULL,
    stock_quantity INT NOT NULL
	PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Headphones","Electronics", 30 , 50),("Nutella Hazelnut Spread", "Grocery", 3.01, 100),("Oreo Cookies", "Grocery", 3.68, 150),("9x12 Area Rug", "Home", 152, 2),("LED Desk Lamp", "Home", 18.70, 5),("Blue Topaz Ring", "Jewelry", 60, 1),("Sharpie Highlighters", "Office Supplies", 8.20, 210),("High Density Muscle Foam Roller", "Sports & Fitness", 13.40, 60),("Phase 10 Card Game", "Toys & Games", 4.88, 35),("Play-Doh", "Toys & Games", 6.50, 23);