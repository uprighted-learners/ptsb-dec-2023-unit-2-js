/*
    ? Loops
    * execute a block of code repeatedly
    * a loop keeps going until an exit condition is met
        * exit conditions are sometimes explicit and sometimes implicit
    * JS has many, many kinds of loops
    * "for loops" are for when the number of times is pre-defined
    * "while loops" are for when the number of times is unknown at the start
*/


// classic for loop

// for (define variable; define exit condition; update variable)
for (let i = 3; i <= 1000; i++) {
    console.log(i);
    i = i ** 2
}


// looping over something with a length (strings, arrays, etc)
word = "antidisestablishmentarianism"

for (let index = 0; index < word.length; index++) {
    console.log(`letter index ${index}: ${word[index]}`);
}

console.log(word.length);
console.log(word[28]);


// while loop

let count = 0
while (count < word.length) {
    console.log(word[count]);
    count++
}


let num = 0 // define variable
while (num < 0.9) { // define exit condition
    num = Math.random() // update variable
    console.log(num);
}




// for..of loop

for (element of iterable) { }
for (letter of word) {
    console.log(letter); // letter is the actual element! not the index!
}




// NESTED LOOP
console.log("***************");
const vowels = "aeiouy"
let vowels_only = ""

for (letter of word) {
    for (vowel of vowels) {
        if (letter == vowel) {
            vowels_only = vowels_only + letter
        }
    }
}

console.log(vowels_only);

const nums = "01234"
const letters = "abc"

for (num of nums) {
    console.log(num);
    for (l of letters) {
        console.log(l);
    }
}

// this is the inverse of the above
for (l of letters) {
    console.log(l);
    for (num of nums) {
        console.log(num);
    }
}


// a clock! 
for (let i = 1; i <= 12; i++) {
    console.log(`${i} o'clock`);
    for (let j = 1; j < 60; j++) {
        if (j == 15) {
            console.log(`${i} fifteen`);
        } else if (j == 30) {
            console.log(`half past ${i}`);
        } else if (j == 45) {
            if (i == 12) { // a nested if!
                console.log(`quarter til 1`);
            } else {
                console.log(`quarter til ${i + 1}`);
            }
        }
    }
}