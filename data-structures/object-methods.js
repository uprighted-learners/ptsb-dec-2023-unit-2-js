
const dog = {
    name: "Amara",
    breed: "German Shepard",
    sex: "F",
    color: "black",
    age: 2,
    dogYears: 14,
    favoriteActivities: ['yell', 'chase', 'chew', 'fetch'],
    owner: "Brandon",
    walkCount: 0,

    down() {
        // 'this' keyword refers to this whole object
        return `${this.name} lays down`
    },

    // object method can take parameters
    heel(walker) {
        return `${this.name} walks by ${walker}'s side`
    },

    describe() {
        return `${this.name} is a beautiful ${this.color} ${this.breed}.`
    },

    story(walker) {
        // you can use object methods within object methods
        return `${this.heel(walker)}. Then ${this.down()}.`
    },

    walk() {
        // methods can update object attributes
        this.walkCount += 1
    },

    birthday() {
        this.age += 1
        this.dogYears += 7
    },
}

// access attributes with dot notation
console.log(dog.age);

// same with methods
console.log(dog.down());
console.log(dog.heel("Brandon"));
console.log(dog.describe());
console.log(dog.story("Danny"));

// .walk() updates the .walkCount attribute every time we call it
dog.walk()
console.log(dog.walkCount);
dog.walk()
dog.walk()
console.log(dog.walkCount);

dog.birthday()

// we can see that the age, dogYears, and walkCount attributes have been changed
console.log(dog);