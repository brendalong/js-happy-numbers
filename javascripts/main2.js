console.log("hello main2.js");

var testThisNumber = "19";

var splitValues = function(potato){
	console.log("splitValues:", potato);
	var arrayOfNumbers = potato.split("");
	//split applies to the same array. The following results in the same.
	// potato.split();
	// console.log("potato", value);

	for (var i = 0; i < arrayOfNumbers.length; i++){
		arrayOfNumbers[i] = Number(arrayOfNumbers[i]);
	}

	return arrayOfNumbers;
}

function squareAndAdd(passedValue){
	console.log("squareAndAdd", passedValue);
	var processedVals = [];

	var i = 0;
	while (i < passedValue.length){
		var squared = passedValue[i] * passedValue[i];
		processedVals.push(squared);
		i++;
	}

	var allTogether = 0;
	for (var i = 0; i < processedVals.length; i++){
		allTogether = allTogether + processedVals[i];
	}

	return allTogether;
}

function checkHappy(passedValue){
	console.log("checkHappy", passedValue);
	if (passedValue === 1 || passedValue === 7){
		console.log(testThisNumber, "is a HAPPY number");
		document.getElementById("statement").innerHTML = testThisNumber + " is a HAPPY number";
	}else {
		var checkDigits = passedValue.toString();
		if(checkDigits.length === 1){
			//done with this stuff - sad sad.
			console.log(testThisNumber, "is a SAD number");
			document.getElementById("statement").innerHTML = testThisNumber + " is a SAD number";
		}else{
			//keep going
			checkDigits = splitValues(checkDigits);
			var newNumber = squareAndAdd(checkDigits);
			checkHappy(newNumber);
		}
	}
}

//now tied to a button, remove the following
// var isHappy = splitValues(testThisNumber);
// isHappy = squareAndAdd(isHappy);
// isHappy = checkHappy(isHappy);

var button = document.getElementById("btn-checkvalue");

button.addEventListener("click", function(){
	console.log("clicked", document.getElementById("numberVal").value);
	testThisNumber = document.getElementById("numberVal").value;
	// var testThis = splitValues(testThisNumber);
	// testThis = squareAndAdd(testThis);
	// testThis = checkHappy(testThis);
	//now try making one statement
	var testThis = checkHappy(squareAndAdd(splitValues(testThisNumber)));
	
});











