// CASES

// camelCase (we mostly use this in JS)
// WordCase or PascalCase (in JS it's used for class names and certain special framework stuff)
// snake_case (very Pythonic, never use this in JS)
// kebab-case (used in HTML)


/* 
    ? FUNCTIONS
    - block of code that performs a particular task
    - runs when invoked, or "called"

    Functions can be defined with:
        - Declaration
        - Expresion
*/

/* 
    ? DECLARATION

    function functionName(param) {
        ... code block
    }

    1. function keyword
    2. name of the function and parentheses for the (optional) parameter
    3. curly brackets define the code block (as always!)
*/

function hello() {
    console.log("hello");
}

hello()


/* 
    ? FUNCTION EXPRESSION

    const functionName = function (param) {
        ... code block
    }

    1. variable declaration with name of the function
    2. function keyword and parentheses for the parameter
    3. curly brackets define the code block

    ? Or, with ES6 syntax

    let functionName = (param) => {
        ... code block
    }

    Replaces the function keyword before the parens
    with a => after the parens
    Sometimes called "rocket function"
    or "arrow function"
*/

const hi = function () {
    console.log("hi");
}

hi()

const hey = () => {
    console.log("hey");
}

hey()


/* 
    ? PARAMETERS
    - also called arguments
    - parameters let you pass variable information into a function
    - there is no technical limit to how many parameters you can use  
    - the variable name you use to define the parameter in the function
        is the variable you will use to access that data 
*/

const hello_person = (person) => {
    console.log(`Hello ${person}`);
}

hello_person('Mary')
hello_person('Olivia, John, and Frans')
hello_person(123) // it will coerce (implicitly cast) any type it can
hello_person('Jose', 123) // it ignores the extra variable


const addition = (num1, num2) => {
    console.log(num1 + num2);
    console.log("this log happens every time addition() runs");
}

addition(3, 4)
addition(234, 1, 100000) // only the first two are used
addition(2) // missing variables are undefined


/* 
    ? RETURN VALUES
    - returns define the output of a function
    - by default, functions return undefined
    - the function call *becomes* the return value
    - the function will STOP when it hits the return
*/

console.log(addition(1, 2)); // undefined

const subtraction = (num1, num2) => {
    return num1 - num2
    console.log('this wont happen');
}

subtraction(5, 2)
console.log(subtraction(5, 2));


// function calls can be assigned to variables
const newAdd = addition(14, 290)
const newSubtract = subtraction(6, 4)

console.log(newAdd, newSubtract); // undefined, 2
// because addition() doesn't have a return value



// or they can be used as part of a larger expression
let numbers = subtraction(4, 1) * subtraction(6, 2)
console.log(numbers);

// you can even use them as parameters inside other function calls
let whoah = subtraction(50, subtraction(25, 3))
console.log(whoah);

hello()


const greeting = (name, state, hobby) => {
    return `Hello, I'm ${name}. I live in ${state}. I like to ${hobby}`
}

console.log(greeting("Danny", "Oregon", "cook"))
console.log(greeting("Mary", "Tennessee", "curl"))
console.log(greeting("Martha", "Vermont", "play guitar"))


const spongeBob = (text) => {
    let newText = ''
    for (char of text) {
        if (Math.random() > 0.5) {
            newText = newText + char.toUpperCase()
        } else {
            newText += char.toLowerCase()
        }
    }
    return newText
}

console.log(spongeBob('hello world'))


const dan = greeting("Danny", "Oregon", "cook")
console.log(spongeBob(dan));
console.log(spongeBob(greeting("Danny", "Oregon", "cook")));



/* 
    ? CONCISE SYNTAX
    - if the body fits on one line, the curly brackets are optional
        - if no curly brackets, the return is implicit
        - if no curly brackets and a single parameter, the parens are implicit
        - (you still need parens if you have multiple params)
*/


let add = (x, y) => x + y
console.log(add(5, 6));

const double = x => x * 2
console.log(double(4));

console.log(double(15) ** 2) // remember, it's a number and you can do number stuff to it! 


/* 
    ? PRACTICE
    Write a function that calculates a tip
    take two params
        - amount of the bill
        - percentage that you want to tip
    return the amount of the tip
*/


const tipCalc = (bill, tipRate) => {
    const percentage = tipRate / 100
    const tipAmount = bill * percentage
    return Math.ceil(tipAmount) // rounds up to nearest whole number
    // return [bill, tipAmount, Math.ceil(bill + tipAmount)] // to return multiple values, return an array
}

console.log(tipCalc(130, 18))
console.log(tipCalc(17, 15))


// concise version
const tipCalc2 = (bill, tipRate) => tipRate / 100 * bill

// this concise version works, 
// but it's over the threshold of how much complexity I would personally do on one line
const tipCalc3 = (bill, tipRate) => [bill, tipRate / 100 * bill, bill + tipRate / 100 * bill]
