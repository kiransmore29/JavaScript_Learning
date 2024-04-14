// 3. Write a JavaScript program to convert a comma-separated value (CSV) string to a 2D array.


function convertTo2Darray(str) {
    return str.split(",")
}

const str = "Kiran, Sonu, Falgun"

console.log(convertTo2Darray(str));