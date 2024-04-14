// Question : 1. Write a JavaScript program to compare two objects to determine if the first contains equivalent property values to the second one.

function hasSameKeys(object1, object2) {
    const keys1 = Object.keys(object1)
    const keys2 = Object.keys(object2)

    if (keys1.length != keys2.length){
        return false
    }

    keys1.forEach(key => {
        if (key in keys2) {
            
        } else {
            return false
        }
    });
    
    return true
}

object1 = {
    name : "Kiran",
    city : "Pune",
    age : 23,
    working : true
}

object2 = {
    name : "Sonu",
    city : "Pune",
    age : 23,
    working : true
}

console.log(hasSameKeys(object1, object2));