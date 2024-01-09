/* 
    ? Arrays
    * list-like object
    * reference data type
    * hold multiple data types (literally anything that can be stored in JS)
    * prototype has methods to perform traversal and mutation operations
        * denoted by [ ]
        * content can be accessed by their index
*/


// create new array literal
let newArr = []

console.log(newArr); // []
console.log(Boolean(newArr)); // true! empty arrays evaluate to true

// create an array using Array constructor
let arr = new Array(1, 2, 3)
console.log(arr);


let worstInstruments = ["accordian", "bagpipes", "saxophone"]

console.log(worstInstruments);
console.log(worstInstruments.length); // 3
console.log(worstInstruments[2]); // saxophone
console.log(worstInstruments[3]); // undefined

// ? Assignment

// assign at the end (add a new value)
worstInstruments[3] = "ukulele"

console.log(worstInstruments);
console.log(worstInstruments[3]);

// assign off in the distance
worstInstruments[8] = "kazoo"
// console.log(worstInstruments);
console.log(worstInstruments[5]);

// assign in the middle (and change a value)
worstInstruments[2] = "bass"
// console.log(worstInstruments);

// dynamic append
worstInstruments[worstInstruments.length] = "organ"
// console.log(worstInstruments);

// dynamic reassignment
worstInstruments[worstInstruments.length - 3] = "saxophone"
// console.log(worstInstruments);

// assigning values to a different variable
const saxophone = worstInstruments[7]
console.log(saxophone);

console.log(worstInstruments.length);


// ? Nesting Arrays

// arrays can have anything in them! 
const manyDataTypes = [
    "string",
    true,
    36,
    undefined,
    null,
    NaN,
    "string",
    36,
    saxophone,
    "more stuff",
    [1, 2, 3],
    ["these", "can", ["have", "anything in them"]],
]

manyDataTypes[3] = "defined"

// traversing a nested array
console.log(manyDataTypes);
console.log(manyDataTypes[11]);
console.log(manyDataTypes[11][2]);
console.log(manyDataTypes[11][2][0]);

const have = manyDataTypes[11][2][0]

console.log(typeof have); // string
console.log(typeof manyDataTypes); // object

console.log(manyDataTypes[11][2] instanceof Array); // true (instanceof returns a boolean)

// typeof only works for primitive types, instanceof only works (reliably) for reference types
// const s = "a string"
const s = new String('a string')
console.log(s instanceof String); // true
console.log(s instanceof Number); // false

