//filters
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function check_even(item) {
// 	if (item % 2 == 0) {
// 		return true;
// 	} else {
// 		false;
// 	}
// }

// const even_nums = nums.filter((item) => item % 2 === 0);
// const even_nums = nums.filter((item) => { return item % 2 === 0 });  // if used {} then return is necessary
// const even_nums = nums.filter( (item) =>  return check_even(item))

// const new_nums = [];

// nums.forEach((num) => {
// 	if (num % 2 === 0) {
// 		new_nums.push(num);
// 	}
// });

// console.log(new_nums);

// console.log(even_nums);

// maps
// const nums = [1,2,3,4,5,6,7,8,9,10]

// const squares = nums.map((num) => num ** 2 )
// // console.log(squares);

// // chaining
// const even_sqaures = nums.filter((num) => num % 2 == 0)
//                         .map((num) => num ** 2)

// console.log(even_sqaures);
// console.log(typeofInfinity)

// reduce
const nums = [1, 2, 3, 4];

const initialValue = 0;
const total = nums.reduce((accumulator, currentValue) => {
    console.log("ACCUMULATOR", accumulator, "CURRENT VALUE",currentValue);
	return accumulator + currentValue;
}, initialValue);

console.log(total);


// const cart = [
//     {
//         item : "JS Course",
//         price : 2999,
//     },
//     {
//         item : "Py Course",
//         price : 2599
//     },
//     {
//         item : "DSA",
//         price : 9999
//     }
// ]


const total_price = cart.reduce((accum, current) => accum + current, 0)

console.log(total_price);