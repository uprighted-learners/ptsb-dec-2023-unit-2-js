
/* 
    ? VARIABLES
    * a variable represents one piece of data in memory
    * in JS variables must be declared
    * declaration
        * allows memory space to be reserved using an identifier
        * starts with keywords: let, const, or (archaic) var
        * must start with a letter, $, or _
        * if no value is assigned, it's undefined
    * assignment
        * gives the variable a data value
        * can be any value or data type
        * can be reassigned (unless declared with const)
    * initialization
        * giving a new variable its first value
        * usually done on the same line as declaration
*/


let a // declaration
console.log(a);

a = "aaaaa" // assignment
console.log(a);

a = 111111 // assignment again (reassignment)
console.log(a);

let b = 2222
console.log(b);

let c = a + b
// c = 111111 + 2222
console.log(a + b);
console.log(c);
console.log(c++);

console.log('*****');
const d = c // you can assign one variable to another
console.log(d);
console.log('*****');

console.log(c++);
console.log(c++);
console.log(c++);
console.log(c++); // there's nothing stopping you from changing the value as many times as you want
console.log(c++);
console.log(c);
c = a + b
console.log(c);

console.log('*****');
console.log(d); // the variable d retains the value it had when it was set, it doesn't keep its relationship to c



const address = "123 Main St"
// address = "321 Main St" // TypeError: Assignment to constant variable.

let age = 38
console.log(age); // 38
age++ // increment operator (age = age + 1)
console.log(age); // 39
age-- // decrement operator (age = age - 1)
console.log(age); // 38
age += 3 // "plus equals" (age = age + 3)
console.log(age); // 41
