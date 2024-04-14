//singleton


//object literals

const mySym = Symbol("key1")

const JsUser  = Object({
    "name" : "Kiran",
    "age" : 18,
    "location" : "Pune",
    "email" : "kiransmore22@gmail.com",
    "isLoggedIn" : false,
    "lastLoginDays" : ['Sun', "Mon"],
    [mySym] : "myValue"
})


console.log(typeof JsUser[mySym]);

// Object.freeze(JsUser)       //object will not change once you freeze it
// Object.F

JsUser['age'] = 23
// console.log(JsUser);

JsUser.greeting = function(){
    return "Hello User";
}
console.log(JsUser.greeting);

JsUser.returnName = function(){
    return `My name is ${this.name}`;
    // return `My name is ${this.name}`;   //OR

}
console.log(JsUser.returnName());


console.log(JsUser)

delete JsUser.returnName

console.log(JsUser);
console.log(JsUser.returnName());


