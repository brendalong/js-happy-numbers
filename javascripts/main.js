console.log("hello main.js");

/*
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1.
*/


var testThisNumber = "19";
var splitIntoArray = testThisNumber.split("");
console.log("splitIntoArray",splitIntoArray);

for (var i = 0; i < splitIntoArray.length; i++){
	splitIntoArray[i] = Number(splitIntoArray[i]);
}
console.log("splitIntoArray after:",splitIntoArray);

var squaredValues = [];
i = 0;
while (i < splitIntoArray.length){
	var squared = splitIntoArray[i] * splitIntoArray[i];
	squaredValues.push(squared);
	i++;
}

console.log("squaredValues", squaredValues);
// makes some notes!!!!
// do while will run once and then check for truth value
var addTogether = squaredValues[0];
i = 0;
var total;

do {
	total = addTogether + squaredValues[i];
	i++;
}
while (i < squaredValues.length);

console.log("total", total);

















