/* 
    ? Classes
    * templates or blueprints for creating objects
    * they encpasulate data with code
    * JS is a prototype-based language with access to Object-Oriented Programming principles
    * Classes are considered special functions. They can be defined as:
        * class declarations
        * class expressions
    ! classes are not hoisted
*/


// Class declaration

class Learner {
    constructor(name, isStudent, timeZone, coolFact, cohort) {
        this.firstName = name
        this.isStudent = isStudent
        this.timeZone = timeZone
        this.coolFact = coolFact
        // defaults have to go at the end of the parameters
        this.cohort = cohort || "PTSDB Dec 2023"
        this.favoriteSubjects = ['JavaScript', 'HTML', 'CSS']
    }

}

// multiple, unique instances can be made using this class
const frans = new Learner('Frans', true, 'Eastern', 'sings')
const jose = new Learner('Jose', true, 'Central', "ambidextrous")

console.log(frans);

console.log(typeof frans); // object
console.log(frans instanceof Object); // true
console.log(frans instanceof Learner); // true

// martha = {
//     isStudent: true,
//     timeZone: "Eastern",
//     name: "Martha",
//     coolFact: "is a flight attendant!"
// }
const martha = new Learner('Martha', true, 'Eastern', 'flight attendant')
console.log(martha);

const barbara = new Learner('Barbie', true, 'Greenwich Mean Time', 'doesn\'t exist', 'SDB Feb 22')
console.log(barbara);

// it's an object, so you can do basic object stuff to it
console.log(Object.keys(frans));
console.log(Object.values(frans));

// including adding, changing, and deleting attributes
barbara.firstName = "Barbara"
console.log(barbara);

martha.favoriteSubjects.push('JSON')
console.log(martha.favoriteSubjects);
