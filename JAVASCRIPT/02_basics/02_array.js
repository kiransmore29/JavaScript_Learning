// const marvel = ["Thor", "Iron Man", "Spider Man"]
// const dc = ["Batman", "Superman", "Flash"]
// const nos = [1,2,3]

// marvel.push(dc)
// console.log(marvel)

// const characters = marvel.concat(dc)
// console.log(characters);

// const all_characters = [...marvel, ...dc, ...nos]           //called as spread operation
// console.log(all_characters);


// const array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10]]]
// const flat_nos = array.flat(Infinity)
// console.log(flat_nos);


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Kiran"))
console.log(Array.from({name:"kiran"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))
