function add(num1, num2){
  var result = num1 + num2;
  return result;
}

console.log(add(15, 40));

function subtract(num1, num2){
    var result = num1 - num2;
    return result;
}
console.log(subtract(5, 1));

function multiply(num1, num2){
    var result = num1 * num2;
    return result;
}
console.log(multiply(4, 8));


function divide(num1, num2){
    var result = num1 / num2;
    return result;
}
console.log(divide(12, 2));


module.exports = {
    //name of function + what the function does
   add: add,
   subtract: subtract,
   multiply: multiply,
   divide: divide
};
