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

  connection.connect(function(err) {
    if (err) throw err;
    runSearch();
  });

  function runSearch() {
    inquirer
      .prompt({
        name: "artist",
        type: "input",
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
      .then(function(answer) {
        switch (answer.action) {
        case "1 for widget":
          widgetSearch();
          break;
  
        case "2 for thing":
          thingSearch();
          break;
  
        case "3 for animal":
          animalSearch();
          break;
  
        case "4 for gizmo":
          gizmoSearch();
          break;
  
        case "5 for coke":
          cokeSearch();
          break;

          case "6 for pepsi":
          pepsiSearch();
          break;
  
        case "7 for sprite":
          spriteSearch();
          break;
  
        case "8 for water":
          waterSearch();
          break;
  
        case "9 for shirt":
          shirtSearch();
          break;
  
        case "10 for pants":
          pantsSearch();
          break;
        }
      });
  }
