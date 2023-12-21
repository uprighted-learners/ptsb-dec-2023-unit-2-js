console.log("Hello World") // inline comment

/* 
    ? JAVASCRIPT
    * founded in 1996 by Brandon Eich
    * ECMA sets the standard
        * ECMAScript5 is from 2009, ES6 is 2015, 
        * now there's a new edition every year
        * we're on the 14th edition
    * client-side language (runs in browser)
    * interpreted, not compiled
    * first-class functions (functions are a type)
    * weakly typed (as opposed to strongly typed, like Java or C++)
    * dynamically typed (as opposed to statically typed, like TypeScript or Java)
    * multi-paradigm language
        * functional language
        * object-oriented language
        * prototype-based
        * imperative
        
    

    ? COMMENTS
    * blocks of code that are not interpreted
    * denoted by // for single lines
    * denoted by /* for multiple lines

    * comments are read but not executed
    * they are still read by the parser
    * do not keep actual secrets in the comments! 

    * as learners, comments help us take notes
    * as developers, comments help
        * communicate with other developers (including our future selves)
        * keep code "readable" -- easy to understand and maintain
    
    * shortcuts:
        * cmd/ctrl + / for single lines
        * optn/alt + shift + a for multi lines

    ? CONSOLE OBJECT
    * gives us access to the interpreter's console
    * allows us to view output from the program
*/

2 + 2 // we didn't tell node to do anything with this
console.log(2 + 2)

/* 
    ? DATA TYPES
    Primitive types
        * string
        * number (including NaN)
        * boolean
        * null
        * undefined
        * (bigint)
        * (Symbol)
    Reference types (these are actually all implementations of Object)
        * object
        * array
        * function
        * map
        * set
        * (and more)
*/

console.log("strings are text defined by quote marks")
console.log("strings can include any $ symbol 9 that ` you can type()");
console.log("you can operate" + " on strings"); // concatenation
console.log("you", "can", "log", "multiple", "strings")

console.log('Strings can use either type of quote mark');
console.log("John's dog is named Beau. " + 'Beau says "woof"');

// STRING TEMPLATES

console.log(`This is a string template, or a template string. It can have ' and "`);
console.log(`String templates have at least ${1 + 1} special powers`); // string interpolation
// you can evaluate any raw JS code in between the curly brackets
// ONLY works in string templates defined with ``

// STRING ATTRIBUTES

console.log('use a dot to access attributes'.length);

// STRING METHODS

// we'll come back to this

// STRING INDEXING

console.log('strings are indexed, starting from 0'[3]);
console.log('index refers to the position of each element in order'[52]);

// STRING LITERAL VS INTERPOLATED STRING

console.log("a string literal is the string exactly as written");
console.log(`template strings can be literal`);
console.log(`it stops being a string literal` + ' when you operate on it'); // concatenated
console.log(`or when you operate ${'in' + 'side'} it`); // interpolated



// NUMBERS

console.log(2 + 2);
console.log("2" + "2");
console.log(22.2222222222 * 2);
console.log(22 / 11);
console.log(22 / 3);
console.log(23 % 3); // modulo operator finds remainder
console.log(22 / 0);
console.log(Infinity * 3);
console.log(22 ** 3);
console.log(Math.sqrt(-1)); //NaN (imaginary numbers are not built in)
console.log(Number.MAX_SAFE_INTEGER);

// TYPE COERCION

// explicit coercion: changing the type on purpose using the "type constructor"
console.log(typeof Number("22"));
console.log(typeof String(22));
console.log(Number()); // 0 by default
console.log(typeof "22"); // typeof just tells you the type of something

// implicit coercion: changing the type as a side affect
console.log(2 + "2"); // 22
console.log(2 * "2"); // 4
console.log("2" + 2999208902348243);

// not everything can be coerced
console.log(undefined + 2); // NaN (Not a Number)


/* 
    ? UNDEFINED AND NULL
    * null: a space for a value exists, but no value exists
    * undefined: there is no concept of a value existing here
*/


let xyz
console.log(xyz); // undefined

xyz = null
console.log(xyz); // null
