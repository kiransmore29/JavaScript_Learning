// const myArr = [0,1,2, true, "Kiran", null, undefined, ["K", "K"], 
//                 (1,2, 3), {name:"Kiran"}]

// console.log(myArr);

// console.log(typeof myArr); //type is object

// const newArr = myArr
// newArr[0] = 9

// console.log(myArr[myArr.length - 1].name);
// console.log(myArr[0]);
// console.log(newArr[0]);


// const marvel = new Array("Cap", 'Iron Man', "Loki")
// console.log(marvel);

// marvel.push("Thor")
// console.log(marvel);

// marvel.pop()        //takes no parameter
// console.log(marvel);

// marvel.unshift("Spider Man")  //Adds element in beginning
// console.log(marvel);

// marvel.shift()          //Removes 0th element, takes no parameter
// console.log(marvel);

// console.log(marvel.includes("Batman"))    //in operation, returns boolean

// console.log(marvel.indexOf("Iron Man", 2));
// console.log(marvel.indexOf("Batman"));       // -1 if not found

// const superheroes = marvel.join()
// console.log(typeof superheroes);

// //slice and spice  (Interview Question of Diff between both)
// const original_array = [0,1,2,3,4,5]
// console.log("A ", original_array);

// const arr1 = original_array.slice(1, 3)
// console.log(arr1);
// console.log("B ", original_array);


// const arr2 = original_array.splice(1,3)
// console.log(arr2)
// console.log("C ", original_array);


// let arr = [1,2,3,4,5]

//Removing
// arr.splice(2, 1)
// console.log(arr)

// arr2 = arr.slice(0, 2).concat(arr.slice(3))
// console.log(arr2)

// arr.splice(2,0,2.5)
// console.log(arr);

// let arr2 = arr.slice(0,2).concat(2.5).concat(arr.slice(2))
// console.log(arr2);


// const arr = [6,7,8,9,10]

// if (arr.indexOf(8) != -1){
//     index = arr.indexOf(8)
//     arr.splice(index, 1)
// } 
// console.log(arr);

// if (arr.indexOf(8) != -1){
//     index = arr.indexOf(8)
//     const arr2 = arr.slice(0, index).concat(arr.slice(index + 1))
//     console.log(arr2);

// } 


const arr = [6,8,7,8,9,8,8,10]

while (arr.indexOf(8) != -1){
    index = arr.indexOf(8)
    arr.splice(index, 1)
}

console.log(arr);
