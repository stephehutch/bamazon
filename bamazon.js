var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "", 
  database: "bamazon_DB"
});




// connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});




// function which prompts the user for what action they should take
function start() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    console.table(res);


  inquirer
    .prompt({
      name: "item",
      type: "input",
      message: "What is ID of the product you would like to buy?",
    })
    .then(function (answer) {
      // based on their answer, either call the bid or the post function
      if (answer.item > res.length + 1 ) {
        console.log("Sorry I can't find that product")
     
      } else if (res[answer.item - 1 ].id) {
        console.log("You have selected " + res[answer.item - 1 ].product_name)
        buy(res[answer.item - 1 ].id, res[answer.item - 1 ].price, res[answer.item - 1 ].stock_quantity,res[answer.item - 1 ].product_name );
        return
      }
    });
  });
}

function buy(itemID, price, quantity, name) {
  inquirer
    .prompt([
      {
        name: "qty",
        type: "input",
        message: "How many would you like to buy?"
      }]).then(function (answer) {

        var query = "SELECT  stock_quantity FROM products";
        connection.query(query, { id: itemID }, function (err, res) {

          if (quantity >= answer.qty) {
            console.log("ok. Here's your " + answer.qty + " " + name + "(s)")
            console.log("That'll be  $" + answer.qty * price + " please.");
           updateProduct(itemID, price, quantity, name, answer.qty)
          }else {
            console.log("We do not have enough of those.")
            return
          };
        });
      });
}

function updateProduct(itemID, price, quantity, name, bought) {
  console.log(itemID, price, quantity, name)
  console.log("Updating quantities...\n");
  connection.query(
    "UPDATE products SET ? WHERE ?",
    [
      {
        stock_quantity: quantity - bought
      },
      {
        id: itemID
      }
    ],
  );
  connection.end();
return 
}

