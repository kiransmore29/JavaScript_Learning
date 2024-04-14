// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})();
// in first () we are writing function definition in second() we are calling execution
// immediate execution
// avoid pollution from global scope i.e, from global varibles
// Semi columns is important after function call in such cases else will throw error.

(
   (name) => {
        console.log(`DB CONNECTED 2 ${name}`);
    }
)("Kiran");

// also you can add parameters
// first function was named IIFE because it has a name (chai in this case) 
// and seconds was simple IIFE bacause it did not had a name

