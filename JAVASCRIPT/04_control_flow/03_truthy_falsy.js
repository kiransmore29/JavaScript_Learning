const userEmail = {}; //"kiransmore22@gmail.com"

if (userEmail) {
	console.log("Got user mail");
} else {
	console.log("Din't found");
}

// falsy values:
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values:
// All values except falsy values are truthy values
// true, "0", " ", "false", 1, 2, [], {}, function(){}

//function(){}  This is an empty function

// checking if array and object is empty
const temp_array = [];
if (temp_array.length === 0) {
	console.log("Array is empty");
}

const temp_obj = {};
if (Object.keys(temp_obj).length === 0) {
	console.log("Object is empty");
}

console.log(false == 0); // true
console.log(false === 0); // false
console.log(false == ""); // true
console.log(false === ""); // false
console.log(0 == ""); // true
console.log(0 === ""); // false
