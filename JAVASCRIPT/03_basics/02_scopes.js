let a = 10
const b = 20
var c = 30

// if (true){
//     a = 100
//     c = 300
// }

// console.log(a);
// console.log(b);
// console.log(c);

function abc(){
    console.table([a,b,c])
}

// abc()

function one(){
    const username = "Kiran"

    function two(){
        const website = "google.com"
        console.log(username)
    }
    // console.log(website);
    // two()
}
// one()


if (true){
    const username = "Kiran"
    if (username === "Kiran"){
        const website = " google.com"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

console.log(addOne(5))

function addOne(num){
    return num + 1
}

console.log(addTwo(5))

const addTwo = function(num){
    return num + 2
}