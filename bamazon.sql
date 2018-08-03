DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_id INT NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("1", "widget", "toys", 15.00, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("2", "thing", "toys", 12.00, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("3", "animal", "toys", 13.00, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("4", "gizmo", "toys", 14.00, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("5", "coke", "drinks", 16.00, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("6", "pepsi", "drinks", 5.00, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("7", "sprite", "drinks", 4.00, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("8", "water", "drinks", 3.00, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("9", "shirt", "clothes", 22.00, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("10", "pants", "clothes", 25.00, 100);

SELECT * FROM products;