/* 
    ? Promises
    * an object that may produce a singular value in the future
    * Three States
        * Pending (unfinished)
        * Fulfilled (complete with result)
        * Rejected (error)
    * allow code to execute without having to wait for its completion
*/

let synchronousFx = () => {
    return "No promises here"
}
console.log(synchronousFx());


let promiseFx = () => {
    // the Promise constructor takes one argument, a callback with two params
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
            resolve("a promise!")
        } else {
            setTimeout(() => {
                reject('nice try')
            }, 2000)
        }
    })
}

// Returns a promise, does not allow us to see the information
// console.log(promiseFx());

// In order to get data out of the Promise object, we must resolve it
// using resolvers! Resolvers take a callback
promiseFx()
    .then(resolution => console.log(resolution))
    .then(r => console.log("you can do more .then()s, but the promise only resolves once"))
    .catch(err => console.log(err))
    .finally(() => console.log("this runs at the end"))

console.log("stuff keeps happening during the promise");




/*
    ? Asynchronous Functions
    * introduced in ES2017
    * alternative to writing explicit promises
    * a function that returns a promise object
    * allows us to resolve or reject a promise
    
    Syntax:
    * async function myFx() {}
    * const myFx = async function() {}
    * const myFx = async () => {}
*/


let asyncFx = async () => {
    return "Hello Learners"
}

console.log(asyncFx()); // returns unresolved promise object

// use a resolver
asyncFx().then(r => console.log(r))

// or! use await

/* 
    ? Await Keyword
    * can be utilized only inside of asynchronous functions
    * tells JS we must wait on a promise before moving on
*/

let start = async () => {
    const result = await asyncFx() // the function won't proceed until this resolves
    console.log(result);
    return result
}

start()
