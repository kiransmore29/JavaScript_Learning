function sayMyName() {
	console.log("K");
	console.log("i");
	console.log("r");
	console.log("a");
	console.log("n");
}

// console.log(sayMyName)
// sayMyName()

function addTwoNumbers(num1 = 0, num2 = 2) {
	return num1 + num2;
}

result = addTwoNumbers((num2 = 5), (num1 = 6));

// console.log(result);

function loginUserMessage(username) {
	if (!typeof username == "string") {
		// ! mark means not
		return "Please enter a username";
	} else {
		return `${username} just logged in.`;
	}
}

// console.log(loginUserMessage());

function calculateCartPrice(num1, num2, ...nums) {
	return [num1, num2, nums, nums.length];
}

console.log(calculateCartPrice(6, 7, 8, 9));

const user = {
	name: "Kiran",
	price: 999,
};

function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`)
}

handleObject(user)