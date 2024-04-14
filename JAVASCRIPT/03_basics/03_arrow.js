// const user = {
// 	userName: "Kiran",
// 	price: 999,
// 	welcomeMessage: function () {
// 		return `Mr. ${this.userName} welcome the website.`;
// 	},
// };

// console.log(user.welcomeMessage());
// user.userName = "Kiran More";
// console.log(user.welcomeMessage());

// const user2 = {
// 	userName: "Kiran",
// 	price: 999,
// 	count: 1,
// 	welcomeMessage: function () {
// 		if (this.count == 3) {
// 			return this.userName;
// 		}
// 		console.log(this);
// 		this.count++;
// 		return `Mr. ${this.welcomeMessage()} welcome the website.`;
// 	},
// };

// console.log(user2.welcomeMessage());

// let name = "kiran";
// console.log(this);

// IMP question
//difference if we use "this" in global scope of node environment and in browser

// function chai() {
//     let userName = "Kiran"
// 	console.log(this.userName);   // will show as undefined
// }
// chai();


// *** this only works in objects

// const chai = function() {
//     let userName = "Kiran More"
// 	console.log(this.userName);  // will show as undefined
// }
// chai();

//You can use arrow function on normal functions but it doesnt work on arrow functions

// const chai = () =>{
//     let userName = "Kiran More"
//     console.log(this);  // will show as {}
// }
// chai();


//we can also define it as:
//this is explicit return
// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(4,5))

// If we write {} then compulsorily we will need to add return else not required
//this is implicit return
// const addThree = (num1, num2, num3) => { return num1 + num2 + num3 }
// console.log(addThree(4,5, 1))

// if you want return object you can do inside of ()
const get_name = (name) => ({userName : name})
console.log(get_name("Kiran"))

 

