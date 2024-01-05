/* 
    ? Scope
    * used to determine how information in different blocks of code can be accessed.

    ? Three types of scope:
    * global
        * outermost scope
        * window object in the browser (or other client)
        * js file (module) in node
        * accessible from every other scope
    * block
        * accessed within a code block
        * introduced with ES6, with let and const
    * function
        * accessed within a function
    
    "Lexical scope" refers to scope that is defined by it's location or relationship to other code
    In JS, block and function scopes are both lexical scopes

    "Module scope" describes whether or not variables are available 
    when one module is imported into another
*/

// sometimes you want a global constant on purpose
// this is called a "global constant"
const ALPHABET_ENGLISH_UPPERCASE = "ACBDEF...."

// but usually you want to keep things out of the global scope
const globalScopeVar = "this is global scope"

function abc() {
    const functionScopeVar = "this is function scope"
    if (true) {
        console.log(globalScopeVar);
        console.log(functionScopeVar);
        console.log(ALPHABET_ENGLISH_UPPERCASE);

        const blockScopeVar = "this is block scope"
    }
    // console.log(blockScopeVar);
}

// console.log(functionScopeVar); // ReferenceError
abc()


function outerFx() {
    const outerScopeVar = "outer scope"

    function innerFx() {
        const innerScopeVar = "inner scope"
        console.log(outerScopeVar);
    }
    // console.log(innerScopeVar);
    innerFx()
}
outerFx()


/* 
? HOISTING
* JS' parsing engine reads top to bottom, left to right.
* JS' interpreter reads the code twice.
* first, it looks for function declarations and vars and hoists them
* it allocates memory space to those declarations
* then it executes the code line-by-line
* function expressions, lets and consts are not hoisted
! DO NOT RELY ON THIS
*/


// console.log(firstName); // ReferenceError: Cannot access 'firstName' before initialization
let firstName = "Danny"

// console.log(lastName);
const lastName = "Burrow"

// vars are hoisted, but only the declaration, not the assignment
console.log(middleName); // undefined
var middleName = ''

// Function Declarations ARE hoisted
displayName()
function displayName() {
    console.log(firstName, middleName, lastName);
}


// Function Expressions ARE NOT hoisted
// sayHi() // ReferenceError: Cannot access 'sayHi' before initialization
const sayHi = () => {
    console.log("Hi,", firstName);
}



/* 
    ? let/const vs var
    * var is hoisted, let and const are not
    * let and const can be block scoped
    * var can only be function scoped or global
*/


const funcName = () => {
    if (1) {
        let letVar = 1234
        var varVar = 4321
    }
    // console.log(letVar);
    console.log(varVar); // var is not block scoped, but it is still function scoped! 
}
funcName();

// console.log(varVar); // ReferenceError: varVar is not defined


/*
    ? Immediately Invoked Function Expression (IIFE)
    also called "Self-Executing Anonymous Function"
    (anonymous means it doesn't have a name, we use them SO MUCH in Javascript)
    used to run code immediately on file load
    without mucking up the global scope
*/


// the parentheses can be the "grouping operator"
(() => {
    // include a comment saying what this does! 
    let varName1
    const varName2 = 0
    console.log(varName2);
})()

