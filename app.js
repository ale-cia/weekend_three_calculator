var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = 5000;

var calc = require('./calculations.js');
console.log(calc);

//initialize empty array
var calcResult = [];

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

//Route for ajax POST request
//returns data from calcData
app.post('/operation', function(req, res){
  console.log(req.body);
  res.sendStatus(201);
  var getResult = req.body;
  calculate(getResult);
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
   var newNum = calc.add(numOne, numTwo);
   console.log(newNum);
   //push the result into the array
   calcResult.push(newNum);
  } else if (operand === 'subtract') {
    var newNum = calc.subtract(numOne, numTwo);
    console.log(newNum);
   calcResult.push(newNum);

  } else if (operand === 'multiply') {
   var newNum = calc.multiply(numOne, numTwo);
   console.log(newNum);
   calcResult.push(newNum);

  } else if (operand === 'divide') {
   var newNum = calc.divide(numOne, numTwo);
   console.log(newNum);
   calcResult.push(newNum);
  }
}//calculate



app.listen(port, function(){
	console.log('listening on port', port);
}); //
