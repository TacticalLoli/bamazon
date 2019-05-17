var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,

	user: 'root',

	password: 'Jos229988!',
	database: 'bamazon'
});

connection.connect(function(err) {
    if (err) throw err;
    
    startPurchase();
  });

  function startPurchase() {
	inquirer.prompt([
		{
			type: 'input',
			name: 'item_id',
			message: 'Enter the Item ID which you would like to purchase.'
		},
		{
			type: 'input',
			name: 'quantity',
			message: 'How many do you need?'
		}
	]).then(function(input){
        var item = input.item_id;
		var quantity = input.stock_quantity;

    }