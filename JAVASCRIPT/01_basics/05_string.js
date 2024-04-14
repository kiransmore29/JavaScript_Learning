const name = "Kiran"
const repoCount = 50

// console.log(name , repoCount + " Value")

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("Kiran-More")
// console.log(name.length)
// console.log(gameName.length)
// console.log(name.toUpperCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf("r"))


console.log(gameName.substring(0, 2));
console.log(gameName.slice(-4, 2));
console.log(gameName);


const variable = new String("  abc  ")

console.log(variable.trim());

const url = "https://google.com/kiran%20more"

console.log(url.replace("%20", " "));

console.log(url.includes("kiran"));


console.log(url.split("/"))