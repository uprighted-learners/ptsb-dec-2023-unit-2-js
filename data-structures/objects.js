/* 
    ? Objects
    * containers for values
    * organized by keys (also called "properties" or "attributes")
    * denoted by { }
    * not indexable
    * comma separated key-value pairs 
        * { property: value }
*/

let exampleObject = { key2: "value2", key: "value", key3: { innerKey: "innerValue" } }

/* 
    ! Accessing Values by Key 
*/

/* 
    ? Dot notation
    * requires that you know the key name
    * requires valid identifier as key
    * valid JS identifiers:
        * can contain Unicode letters, $, _, and digits 0-9
        * but can't start with a numbers
*/

let newThing = exampleObject.key2
console.log(newThing);

const weirdObject = {
    1: "one",
    "thing-3": "two"
}

console.log(weirdObject); // it's a valid object!
// console.log(weirdObject.1); // SyntaxError


/* 
    ? Bracket Notation
    * for when you can't use dot notation :)
    * used for dynamic key names
        * any time you need to use a variable as the key name
    * required for keys that aren't valid JS identifiers
 */


console.log(weirdObject[1]); // one
console.log(weirdObject["thing-3"]); // two


const videoGames = {
    cod: "Call of Duty",
    sdv: "Stardew Valley",
    sr: "Skyrim: the game",
    "ac": "Animal Crossing" // keys can be strings or not
}

const stardewKey = "sdv"

console.log(videoGames.sdv);
console.log(videoGames.ac);
console.log(videoGames.botw); // undefined (because it's not there)

console.log(videoGames.stardewKey); // it's not interpreted as a variable, but as a literal key name
console.log(videoGames[stardewKey]); // this works because it resolves the variable and uses "sdv" as the key
// console.log(videoGames[sdv]); // this doesn't work because you need to use quotes in bracket notation 
// this is because in bracket notation, the interpreter expects variables
console.log(videoGames["sdv"]);


/* 
    ? Destructuring
    * use this when you want to save the value as a variable
    * can get multiple keys out at the same time
*/

const { ac, cod } = videoGames

console.log(ac);
console.log(cod);

// rename the variable during destructuring
const { sr: horseStealingGame } = videoGames
console.log(horseStealingGame);
console.log(videoGames.sr);


/* 
    ! Accessing object contents by method
    * Object.keys() gives an array of keys
    * Object.values() gives an array of values
    * Object.entries() gives an array of arrays of key/value pairs
    
    These are super useful for looping over an object
 */

console.log(Object.keys(videoGames));
console.log(Object.values(videoGames));
console.log(Object.entries(videoGames));



//  ! Modifying Objects

// ? Adding new key/value pairs

const botw = {
    title: "Breath of the Wild",
    genre: "Fantasy RPG",
    franchise: "Zelda",
    rating: "E",
    mutliplayer: false,
    platforms: ['nintendo switch', 'steam if you\'re cheeky']
}

// assign a new value using dot notation with a variable or literal value
videoGames.botw = botw

// or bracket notation
videoGames["re"] = {
    title: "Resident Evil 8",
    genre: "Survival horror",
    franchise: "Resident Evil",
    rating: "M",
    mutliplayer: true,
    platforms: [{ playstation: ["PS4", "PS5"] }, 'XBox Series X', 'iOS']
}

// ? Overwriting existing values

videoGames.sr = {
    title: "Skyrim",
    genre: "Fantasy RPG",
    franchise: "Elder Scrolls",
    rating: "E",
    mutliplayer: false,
    platforms: ['xbox', 'playstation', 'switch', 'steam']
}


// ? Deleting key/value pairs

// delete operator with dot notation
delete videoGames.sdv
// ... or with bracket notation
delete videoGames["cod"]


// ! Accessing Nested Objects
// * you can chain any amount of accesses, using dot and bracket notation

console.log(videoGames.re["platforms"][0].playstation[1]);


/* 
    ! Looping over objects
    * you can use for..in
    * or you can loop over the keys, values or entries using the Object methods
 */

// for (element in iterable) {} // element represents the key

// loops over keys!
for (game in videoGames) {
    console.log(videoGames[game].title);
}

// use Object.values and loop over with forEach
let titles = []
Object.values(videoGames).forEach(game => {
    if (game.title == undefined) {
        titles.push(game)
    } else {
        titles.push(game.title)
    }
})
console.log(titles);

// use Object.entries, and then use indexes 0 and 1 to access the nested arrays
let fantasyRPGs = []
Object.entries(videoGames).forEach(game => {
    if (game[1].genre == "Fantasy RPG") {
        fantasyRPGs.push(game[1].title)
    }
})
console.log(fantasyRPGs);


// or use a for..of to loop over Object.entries, and unpack the nested array into two variables
for ([key, game] of Object.entries(videoGames)) {
    console.log(key);
    console.log(game);
}

// ? use Map, Filter, or Reduce

Object.values(videoGames).map(el => console.log(`${el.title} is the best game ever`))
const eGames = Object.values(videoGames).filter(game => game.rating === "E")

console.log(eGames);
