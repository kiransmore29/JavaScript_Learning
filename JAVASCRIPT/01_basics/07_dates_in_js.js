// Dates

// let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.getTime());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.getMonth());    // months start from 0
// console.log(myDate.getMonth() + 1);    // to start months from 1
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toString());
// let myCreatedDateTime = new Date(2023, 0, 23, 5, 51, 58)
// console.log(myCreatedDateTime.toString());


// let new_Date = new Date("01-19-2023")
// console.log(new_Date.toLocaleString());


// let myTimeStamp = Date.now()
// // for comparison in two dates
// console.log(myTimeStamp);
// console.log(new_Date.getTime())



// console.log(Date.now())     //Date in milliseconds
// console.log(Math.round(Date.now()/1000))        //Date in seconds


let newDate = new Date()

console.log(newDate.getFullYear());


console.log(`Date is ${newDate.toString()}`);


console.log(newDate.toLocaleString('default', {             //allows too much configurations can be done
    weekday : "long"
}))
