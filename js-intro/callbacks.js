/* 
    ? CALLBACKS
    * a callback is just a function!
    * that is passed as a parameter to another function
    * to be used during or after that function
    * the callback is sometimes called the "handler"
    * as in, function that handles the logic
    * callbacks are usually anonymous functions that are defined inline
    * but they don't have to be!
*/

let counter = 0

let callback1 = () => {
    console.log("this is callback one");
    counter += 2
}

let callback2 = (newString, f1) => {
    console.log(newString);
    f1()
    counter += 3
}

let caller = (arg1, fx1, fx2) => {
    console.log(arg1);
    fx1()
    fx2("this is callback two", fx1)
    console.log(counter);
}

caller("this is arbitrary", callback1, callback2)
// caller("this is arbitrary", callback2, callback1)




// Named handler / named callback
const timeHandler = () => {
    console.log("this is the timeout handler");
    counter += 10
    console.log(counter);
}

setTimeout(timeHandler, 2000)
console.log("first");

// Anonymous callback - concise
setTimeout(() => console.log("this one is anonymous"), 4000)
console.log("second");

// Anonymous callback - verbose
setTimeout(() => {
    console.log("this can be as complex as you need it to be");
    counter += 1
    console.log(counter);
}, 2000)



/* 
    ? Map, Filter, Reduce
    * these are the most common way to loop in JS
    * map creates a 1:1 copy of an array, mutated in some way
    * filter creates a copy of an array with only certain values included
    * reduce creates a single value, calculated based on all the values in an array
*/


numArray = [1, 2, 3, 4, 5]

// const doubleHandler = n => n * 2

// .map() takes a callback that takes one argument
let double = numArray.map(n => {
    console.log(n);
    return n * 2
})

console.log(double);


// .filter() takes a callback that takes one argument and returns a bool
let odds = numArray.filter(n => n % 2 == 1)
console.log(odds);

// .reduce() takes a callback that requires two params
// the first one is the accumulator
// the second one is the individual element
const sum = numArray.reduce((nSum, n) => {
    if (n % 2 == 1) {
        return nSum + n
    }
    return nSum
})
console.log(sum);

