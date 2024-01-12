/* 
    ? Ternary operator
 */


// boolean expression ? value if true : value if false
const output = 1 == 0 ? 'value 1' : 'value 2'
console.log(output);

// replaces this construct

let thing
if (1 == 0) {
    thing = 'value 1'
} else {
    thing = 'value 2'
}


const person = {
    name: 'Ken',
    age: 20
}
person.canVote = person.age >= 18 ? true : false

let isSandwichShopOpen = false
person.mood = isSandwichShopOpen ? 'good' : 'bad'

console.log(person);


