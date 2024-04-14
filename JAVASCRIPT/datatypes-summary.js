const id = Symbol(123)
const new_id = Symbol(123)

console.table([id, new_id]);
console.log(id == new_id);


const bigNumber = 93284928093809280982092809850932984298992739827432432n

console.log(typeof bigNumber);
console.log(bigNumber + 2n);


const names = ['Kiran', "Shubham", "Sanjeev", 'Hrishi', 34]
names.push("Sonu")
console.log(names);


myobj = {
    // "name" : "Kiran"
    "abcd":"4",
    1 : "ABC"

}

console.log(myobj['1'])
console.log(typeof myobj)


const myfunction = function(){
    console.log("Hello World");
}

function hellofunction(){
    console.log("Hello JS")
}

myfunction()
hellofunction()