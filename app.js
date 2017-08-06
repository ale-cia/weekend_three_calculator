var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = 5000;

var calc = require('./calculations.js');
console.log(calc);

//initilize
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

app.get('/operation', function(req, res){
	res.send(calcResult);
});

//Take in results and determine type to make calculations
function calculate(result) {
	//compare
   var numOne = result.numOne;
   var numTwo = result.numTwo;
   var operand = result.type;

   //
   calcResult = [];

   if(operand === 'add'){
	  var x = calc.add(numOne, numTwo);
	  //push the result into the array
	  calcResult.push(x);
  } else if (operand === 'subtract') {
	   var x = calc.subtract(numOne, numTwo);
	  calcResult.push(x);
  } else if (operand === 'multiply') {
	  var x = calc.multiply(numOne, numTwo);
	  calcResult.push(x);
  } else (operand === 'divide') {
   var x = calc.divide(numOne, numTwo);
   calcResult.push(x);
  }
}//calculate



app.listen(port, function(){
	console.log('listening on port', port);
});
}
