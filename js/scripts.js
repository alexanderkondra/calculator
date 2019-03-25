//var answer = alert(prompt("name") + " " + prompt("age") + " " + prompt("food") + ".");

/*var add = function(number1, number2) {
  return number1 / (number2 * number2);
};

var number1 = parseInt(prompt("Enter kG:"));
var number2 = parseInt(prompt("Enter cm:"));

var result = add(number1, number2);
alert(result);*/

var farhenhiet = function(celcius) {
	return (celcius * 9 / 5) + 32;
};

var cel = prompt("Enter Celcuios");

alert(farhenhiet(cel));
