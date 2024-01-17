/* 
    ? Object Oriented Programming

    ? Four Core Concepts of OOP
    ? APIE
    * Abstraction
        * the obfuscation of implementation details
    * Polymorphism
        * ability to use a constructor to make different object instances  
    * Inheritance
        * sharing attributes and methods between objects
    * Encapsulation
        * making data available in some places but not others
        * deals with scope
        * organizes information by keeping it scoped to where it is relevant
*/

// ? Abstraction

const process = require('process')
process.stdout.write('use the process object to write to console')
console.log('or let the console object do it, under a layer of abstraction')


const newArr = [1, 2, 3]
newArr[newArr.length] = 4 // this is the implementation
newArr.push(5) // .push is an abstraction of that implementation


// ? Polymorphism

class Animal {
    constructor(name) {
        this.name = name
    }

    eat() {
        return `${this.name} consumed some carbon and probably other stuff`
    }
}

// two separate instances of the same type
// these are polymorphs, different objects with the same "shape"
// you can think of a class as defining the "shape" of an object
const ant7929351 = new Animal('one of many ants')
const ant2935024 = new Animal('another one')


// ? Inheritance 

class Human extends Animal {
    constructor(name) {
        super(name)
        this.species = 'human'
    }

    useLanguage() {
        return `${this.name} communicates using human language`
    }
}

const mary = new Human('Mary')
// the instance "inherits" attributes and methods from Animal
console.log(mary.eat());

// ... because Human extends Animal, therefore mary is an instance of both
console.log(mary instanceof Human); // true
console.log(mary instanceof Animal); // true


// ? Encapsulation 

// const amara = 'brandon\'s dog'

const brandonsHouse = () => {
    const amara = 'brandon\'s dog'
    return amara
}

// console.log('I took ', amara); // this one doesn't work after she is moved inside the house
console.log('I took ', brandonsHouse()); // now I have to break into the house to access her

