
/* 
    ? BOOLEANS 
    * stores a binary value
    * true, false
    * boolean expressions evaluate to true or false
    * JS leans heavily on "truthy" or "falsy"
    
*/

let x = true
let o = false

console.log(x, o); // true, false
console.log(Boolean()); // false (the default state is nothingness)
console.log(Boolean(x)); // true
console.log(Boolean(o)); // false
console.log(Boolean(0)); // false (0 is always false)
console.log(Boolean(1)); // true (1 and all non-zero numbers are true)
console.log(Boolean(-2)); // true
console.log(Boolean(0.000000000000001)); // true

console.log("*******");

console.log(Boolean('a string')); // true
console.log(Boolean("")); // false (empty string)
console.log(Boolean(" ")); // true
console.log(Boolean("0")); // true (the Boolean constructor doesn't know or care what's in the string)

console.log("*******");

console.log(Boolean([])); // true (empty arrays are truthy)
console.log(Boolean([].length)); // false (because it's 0)
console.log(Boolean(x)); // true
console.log(Boolean(o)); // false
console.log(Boolean({})); // true (empty objects are truthy)
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(NaN)); // false

console.log("*************************");



// COMPARISON OPERATORS

console.log(x == o); // false
console.log(x == x); // true
console.log(x == true); // true
console.log(x == false); // false
// console.log(x == a); //ERROR
console.log("*************************");


// bang equals is "not equal to"
console.log(x != o); // true
console.log(x != x); // false

console.log(1 > 2); // false
console.log(2 > 1); // true
console.log(2 >= 1); // true
console.log(2 <= 1); // false
console.log(1 >= 1); // true
console.log(1 <= 1); // true


// STRICT EQUALS compares value AND TYPE

console.log(1 == "one");
// all true
console.log(1 == "1"); // double equals will be true if the values are the same, even if the types are not
console.log(1 == true)
console.log(0 == false);
console.log(0 == "0");

// all false
console.log(1 === "1"); // triple equals will only be true if the value AND TYPE are the same
console.log(1 === true)
console.log(0 === false);
console.log(0 === "0");

// all true again
console.log(1 !== "1");
console.log(1 !== true)
console.log(0 !== false);
console.log(0 !== "0");

console.log("*************************");


/* 
    ? Chaining conditions
    ? Complex conditions
    * AND: &&
    * OR: || 

*/


// both sides of an AND, && have to be true
console.log(x != o && x == true && true && x && 1 != 2); // true
console.log(x != o && x == false); // false
console.log(x == o && x == true); // false

// EITHER side of an OR, || can be true
console.log(x != o || x == true); // true
console.log(x != o || x != true); // true
console.log(x == o || x == true || false || o || 1 == 2); // true
console.log(x == o || x != true || false || o || 1 == 2); // false


console.log("*************************");


/* 
    ? CONDITIONALS
    * logic tree or logic gate
    * do different things in different situations (it depends!)
    * use booleans or boolean expressions to determine what to do
    * if (condition) {code block executed if condition is true}
*/


if (x == true) {
    x = false
    console.log("this is arbitrary");
    console.log("anything can go in here");
}

if (x == true) {
    console.log("this one doesn't happen");
}

console.log("next steps") // this happens regardless of what's going on in the conditionals
// it's outside the curly brackets and therefore not subject to the conditions


let condition = "a condition"
if (condition == 'a condition') {
    console.log('this evaluated to true');
}

// IF/ELSE statements

x = false
if (x == true) {
    console.log('either this one will happen')
} else if (x == condition) {
    console.log('or this one will happen');
} else if (x == condition) {
    console.log('or this one will happen');
} else if (x == condition) {
    console.log('or this one will happen');
} else {
    console.log('ORRRRRRR this one will happen');
}
