var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

var connection = mysql.createConnection({
  host: "localhost",
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
  user: "root",
  password: "root",
  database: "bamazonDB"
});

connection.connect(function (err) {
  if (err) throw err;
  productLoad();
});
function productLoad() {
  var queryString = "SELECT * FROM products";
  connection.query(queryString, function (error, results, fields) {
    if (error) throw error;
    console.log("---------------------------------")
    console.log('Here is what you can choose from:');
    console.log("---------------------------------")
    console.table(results);
    askUser();
  });
}

//Prompt user for what they would like to buy and how many
function askUser() {
  inquirer.prompt([
    {
      name: "item",
      type: "input",
      message: "Enter Item ID",
    },
    {
      name: "quantity",
      type: "input",
      message: "How many would you like to buy?",

    }]
  )
    .then(function (answer) {
      productSearch(answer.item, answer.quantity);
    });
}

//Update stock qty
function buyChoice(id, qty) {
  var qtyString = "UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?";
  connection.query(qtyString, [qty, id], function (error, results, fields) {
    if (error) throw error;
  });
}

//Check to see if enough in stock
//If so purchase and total - if not prompt for another item.
function productSearch(productId, qtyId) {
  var queryString = "SELECT * FROM products WHERE item_id = " + productId;
  connection.query(queryString, function (error, results, fields) {
    if (error) throw error;

    if (qtyId > results[0].stock_quantity) {
      console.log("Not enough in stock, pick a different item.");
      askUser();
    }
    else {
      buyChoice(productId, qtyId);
      console.log("Awesome, your total is: $" + results[0].price * qtyId);
      inquirer.prompt([
        {
          type: "confirm",
          message: "Would you like to shop again?",
          name: "confirm",
          // default: true
        },
      ])
      //code to restart after prompt
      .then(function(shopAgain) {
        switch(shopAgain.confirm) {
          case true:
          productLoad();
          break;
          case false:
          console.log("Thanks for shopping Bamazon!");
          break;
        }
      })
    }
  }); 
}