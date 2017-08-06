var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = 5000;

var calc = require('./calculations.js');
console.log(calc);

//initili
var calcResult = [];

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

//Route for ajax POST request
//returns data from calcData
app.post('/operation', function(req, res){
  console.log(req.body);
  res.sendStatus(201);
  var getResult = req.body;
});

//Take in results and determine type to make calculations
function calculate(result) {
	//compare
   var numOne = result.numOne;
   var numTwo = result.numTwo;
   var operand = result.type;

   if(operand === 'add'){
	  calc.add(numOne, numTwo);
  } else if (operand === 'subtract') {
	  calc.subtract(numOne, numTwo);
  } else if (operand === 'multiply') {
	  calc.multiply(numOne, numTwo);
  } else (operand === 'divide') {
	  calc.divide(numOne, numTwo);
  }
}



app.listen(port, function(){
	console.log('listening on port', port);
});
