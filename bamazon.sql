DROP DATABASE IF EXISTS bamazon_DB;
CREATE database bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
  id int NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(30) NULL,
  price  INT NOT NULL,
  stock_quantity INT DEFAULT 1,
  PRIMARY KEY (id)
);

SELECT * FROM products;

-- 1
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nintendo Switch", "Games", 245, 10);
-- 2
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("The Office: Season 1-3", "Movies and TV", 30, 60);
-- 3
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ordinary Shirt", "Cloths", 5, 400);
-- 4
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Unicorn", "Pets", 5000, 3);
-- 5
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Goku", "People", 9001, 1);
-- 6
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("RV/Meth Lab", "Cars", 20, 3);
-- 7 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wall.E", "Tech", 20, 1);
-- 8 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("The Hat", "Cloths", 500, 3000);
-- 9 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Depression", "Concept", 13, 99);
-- 10 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bob Ross", "People", 900, 1);