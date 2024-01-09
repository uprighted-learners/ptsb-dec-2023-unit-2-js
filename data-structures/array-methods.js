/* 
    ? Array Methods
    * methods are functions that live inside of an object prototype
    * denoted by the . at the end of an object
    * ex: someVariable.toLowerCase()
     
    Remember that each method can BOTH or EITHER
        * perform an action / make a change
        * return a value
    so pay attention to which methods do which! 
*/

let bestInstruments = ['bass', 'guitar', 'piano']

/* 
    ! Add and Remove
*/

/* 
    ? .push()
    * adds an element to the end of an array
    * returns new length of an array
*/

let len = bestInstruments.push('triangle', 'cowbell')

console.log(bestInstruments);
console.log(len);

/* 
    ? .pop()
    * removes element from the end of an array & returns it
*/

let poppedValue = bestInstruments.pop()

console.log(bestInstruments)
console.log(poppedValue);

/* 
    ? .shift()
    * removes the first element from an array & returns it
    * the indices of all elements will change
*/

let shiftedValue = bestInstruments.shift()
console.log(bestInstruments);
console.log(shiftedValue);


/* 
    ? .unshift()
    * adds an element to the beginning of an array
    * returns new length of an array
    * the indices of all elements will change
*/

bestInstruments.unshift(poppedValue, 'xylophone')
console.log(bestInstruments);


/* 
    ! Boolean array methods
*/

/* 
    ? .includes()
    * returns a bool, whether or not the given param is included in the array
*/

console.log(bestInstruments.includes('saxophone')); // false
console.log(bestInstruments.includes('cowbell')); // true

/*
    ? .every()
    * takes a callback that returns a boolean
    * checks whether EVERY element passes the test
*/

const isString = bestInstruments.every((element) => typeof element == 'string')
const isShort = bestInstruments.every(element => element.length < 6)

console.log(isString, isShort);  // true, false

/*
    ? .some()
    * takes a callback that returns a boolean
    * checks whether ANY element passes the test
*/

const isNumber = bestInstruments.some((element) => typeof element == 'number')
const isLong = bestInstruments.some(element => element.length > 5)

console.log(isNumber, isLong); // false, true


/* 
    ! Ordering
*/


/* 
    ? .at()
    * just like access by index, but can takee negative numbers
*/

let piano = bestInstruments.at(-2)
console.log(piano);


/*
    ? .slice()
    * returns a copy, leaves the original intact
    * two params
        * start - inclusive
        * end - exclusive (will not be included in result)
            * end param is optional, will default to end of array  
*/

// const middleThree = bestInstruments.slice(1, 4)
const middleThree = bestInstruments.slice(1, -1) // same thing
console.log(middleThree);

const firstTwo = bestInstruments.slice(0, 2)
console.log(firstTwo);

const lastOne = bestInstruments.slice(-1)
console.log(lastOne);

/* 
    ? .splice()
    * three params
        * start - first value to replace / location to insert
        * deleteCount - how many values to remove
        * newValue - an arbitrary number of values to insert
*/

// start at index one, remove one item, add three new items
bestInstruments.splice(1, 1, shiftedValue, poppedValue, "saxophone")
console.log(bestInstruments);

/* 
    ? .sort()
    * sorts the array in place

    ? .toSorted()
    * returns a sorted copy
*/

// bestInstruments.sort()
console.log(bestInstruments);

const sorted = bestInstruments.toSorted()
console.log(sorted);
console.log(bestInstruments); // hasn't changed


/* 
    ? .reverse()
    * reverses in place

    ? .toReversed()
    * returns a reversed copy

*/

// bestInstruments.reverse()
console.log(bestInstruments);

const copy = bestInstruments.toReversed()
console.log(copy);
console.log(bestInstruments); // hasn't changed


/* 
    !Finding
*/

/* 
    ? .find()
    * takes a callback that returns a boolean
    * returns the first element that passes the test
    
    ? .findLast()
    * same thing but it looks starting from the end

    ? .findIndex()
    * same as find() but returns an index
*/

const shortOne = bestInstruments.find(el => el.length < 6)
console.log(shortOne); // bass

const shortTwo = bestInstruments.findLast(el => el.length < 6)
console.log(shortTwo); // piano

const shortIndex = bestInstruments.findIndex(el => el.length < 6)
console.log(shortIndex); // 1


/* 
    ? .indexOf
    * returns the index of a given element

*/

const longIndex = bestInstruments.indexOf('saxophone')
console.log(longIndex); // 3

const notHere = bestInstruments.indexOf('ukulele')
console.log(notHere); // -1

// add to array only if it's not already there
if (bestInstruments.indexOf('kazoo') == -1) {
    bestInstruments.push('kazoo')
}

if (bestInstruments.indexOf('cowbell') == -1) {
    bestInstruments.push('cowbell')
}

console.log(bestInstruments); // kazoo was added to the end, cowbell was not 


/* 
    ! Map, Filter, Reduce
    always return a copy, don't change the original
*/


const shouted = bestInstruments.map(el => el.toUpperCase())
console.log(shouted);
console.log(bestInstruments);

// includes every element for which the test returns true
const notCowbell = bestInstruments.filter(el => el !== 'cowbell')
console.log(notCowbell);


/* 
    ! Join
    * returns a string, with all elements joined by the given separator
*/

const oneManBand = bestInstruments.join('-')
console.log(oneManBand);

const niceList = bestInstruments.join('\n')
console.log(niceList);

