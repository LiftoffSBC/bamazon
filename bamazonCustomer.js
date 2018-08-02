var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
  // Your username
  user: "root",
  // Your password
  password: "root",
  database: "bamazonDB"
});

connection.connect(function (err) {
  if (err) throw err;
  runSearch();
});

function runSearch() {
  inquirer.prompt({
    name: "item",
    type: "list",
    message: "Enter Item ID",
    choices: [
      "1 for widget",
      "2 for thing",
      "3 for animal",
      "4 for gizmo",
      "5 for coke",
      "6 for pepsi",
      "7 for sprite",
      "8 for water",
      "9 for shirt",
      "10 for pants"
    ]
  })
    .then(function (answer) {
      var id = getIdFromChoice(answer.item)
      inquirer.prompt({
        name: "quantity",
        type: "number",
        message: "How many would you like to buy?",
      })
        .then(function (answers) {
          var qty = getQtyFromChoice(answers.quantity)
          console.log(qty)
        })

      productSearch(id)
    });
}

function getIdFromChoice(choice) {
  // console.log(choice)
  var id = choice[0]
  // console.log(id)
  if (choice.includes("10")) {
    id += choices[1]
  }
  return parseInt(id)
}

function getQtyFromChoice() {
  // what do i put in type??
  var qty = type()
  console.log(qty)
  if (qty > id.stock_quantity) {
    console.log("Not enough in stock, pick a different item.");
    runSearch();
  }
  else {
    buyChoice(id, qty);
  }
  //buy function
}
function buyChoice(id, qty) {
  var qtyString = "UPDATE products SET stock_quantity = stock_quantity - " + qty + "WHERE item_id = " + id;
  connection.query(qtyString, function (error, results, fields) {
    if (error) throw error;
  });
}
// prod function
function productSearch(productId) {
  var queryString = "SELECT * FROM products WHERE item_id = " + productId;
  connection.query(queryString, function (error, results, fields) {
    if (error) throw error;
    // console.log('The solution is: ', results[0]);
  });
  // total price function 
}