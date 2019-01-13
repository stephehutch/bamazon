# Bamazon

## Before Running this program

Before running this program be sure to complete the following:
    1) Add your MySQL password in line 15 of bamazon.js.
    2) Open bamazon.sql in WorkBench and restart the connection.
    
### Dependencies
This database requires the follwoing node packages: 
    1) require
    2) inquirer

    var mysql = require("mysql");
    var inquirer = require("inquirer"); 

## Purchasing
 1) The products are displayed
 2) The user is prompted to select the id of the product they would like to purchase.
 3) One of the following occurs
    a) If the product product is available and the quantity is sufficient, the database is updated. 
    b) if the product exists, but the quantity is insufficient, the user is informed and nothing is updates. 
    c) if the the product cannot be found, the user is informed and nothing is updates. 

## Demo
(https://docs.google.com/document/d/1x7UjpvybfqvF-R64m3vEfLxeoZr7kxpalF-LrflVQsQ/edit?usp=sharing "Purchaseing Screanshots")

