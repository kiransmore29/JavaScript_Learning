// Nullish Coalescing  Operator (??): ( only consideres null undefined )
// mostly considered as a fallback
// let val1;
// let val2;
let val1, val2, val3, val4;

val1 = 1 ?? 2;
val2 = null ?? 3; // if first value(before ??) is null undefined then assign second value(value after ??)
val3 = undefined ?? 4;
val4 = null ?? undefined ?? "" ?? 0 ?? 5; // ?? can be used multiple times
console.table([val1, val2, val3, val4]);
// mostly used when we dont know which funtion will return value


// Ternary Operators
// Syntax : condition ? true : false

const age = 23;
age <= 18 ? console.log("Can Vote") : console.log("Unable to vote");
