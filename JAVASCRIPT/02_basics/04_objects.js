// The only difference in below two lines is

const pubgUser = new Object(); //singleton object
const pubgUser2 = {}; //non - singleton object

pubgUser.id = "123abc";
pubgUser.name = "Kiran";
pubgUser.isLoggedIn = false;


// console.log(pubgUser);

const regularUser = {
    email : "demo@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Kiran",
            lastName : "More"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName)


const obj1 = {
    1 : "a",
    2 : "b"
}

const obj2 = {
    3 : "c",
    4 : "d"
}

const obj3 = {
    5 : "e",
    6 : "f"
}

// const obj3 = obj1.(obj2)

// const obj4 = Object.assign({}, obj1, obj2, obj3)  //first parameter is source after that all are source
// // if you didnt put blank target then first source object will be modified
// console.log(obj1);
// console.log(obj4);


// obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);


// const users = [
//     {
//         id : 1,
//         email : "temp@gmail.com"
//     },
//     {
//         id : 2,
//         email : "demo@gmail.com"
//     }
// ]


// console.log(pubgUser)
// console.log(Object.keys(pubgUser))
// console.log(Object.values(pubgUser))
// console.log(Object.entries(pubgUser))

// console.log(pubgUser.hasOwnProperty("name"))
// console.log(pubgUser.hasOwnProperty("fullName"))


//destructuring

const course = {
    name : "Python",
    price : "999",
    instructor : "Kiran"
}

const {instructor} = course

// if you want to rename

const {instructor : course_instructor} = course

console.log(instructor);
console.log(course_instructor);


//if you didn't give a object a name then it will be considered as JSON

// { 
//     "name" : "Kiran",
//     "course" : "programming",
// }