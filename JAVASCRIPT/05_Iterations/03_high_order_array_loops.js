// const arr = ['a', 'b', 'c', 'd']

const arr = "Hello World"

// for (let i of arr) {
//     // i += 1;
//     console.log(i);
//     // console.log(typeof i);
// }
// for (let i in arr) {
//     i += 1;
//     console.log(i);
//     // console.log(typeof i);
// }





// maps are stored in the ordered they are inserted also they dont add if key is already present
const map = new Map()
map.set("IN", "India")
map.set("USA", "United states of America")
map.set("FR", "France")
map.set("IN", "India")
// console.log(map); 


// for (const [key, value] of map) {
//     console.log(`key ${key} value ${value}`);
// }

// we cannot iterate over object directly as we can do my map




const myobj = {
IN: "India",
USA: "United states of America",
FR : "France",
IN : "India",
}
// for (const [key, value] of Object.entries(myobj)) {
//     console.log(`key ${key} value ${value}`);
// }

// for (const key in myobj) {
//     console.log(key);
// }



const letters = ['a','b','c','d']

for (const key in map) {
    console.log(key);
}