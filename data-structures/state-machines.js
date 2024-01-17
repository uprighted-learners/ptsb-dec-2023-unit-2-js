/* 
    ? State
    * state is the current condition or status of data
    * "managing state" or "maintaining state" mean controlling the data at different points in a process
    * very close to the meaning in English, for example in "The State of the Union", or
        * if "hunger" is a state
            * the state of your hunger slowly increases 
            * until an event (eating) changes the state 
        * if "childhood" is a boolean state
            * you start with a state of true
            * at some point in your life the state updates to false and never changes back

    ? State Machines
    * system with finite and defined states
    * use logic to read, write, or update the state
    * state machines are helpful when 
        * dealing with large / complex data sets
        * doing complex operations with data
*/

// all caps because this is an example of a global constant
const STATES = {
    or: 'Oregon',
    vt: 'Vermont',
    ny: 'New York',
    va: 'Virginia',
    ma: 'Massachusetts'
}

const lookupState = (state) => {
    if (STATES[state]) {
        return STATES[state]
    } else {
        return "we couldn't find info on that state"
        // throw new Error(`${state} isn't a state`)
    }
}

console.log(lookupState('or'));
console.log(lookupState('ny'));
console.log(lookupState('narnia'));
console.log(lookupState('hogwarts'));




const getBestBookBy = (author) => {
    const bestBookBy = {
        "Ann Patchet": "Bel Canto",
        "Kazuo Ishiguro": "The Remains of the Day",
        "Marilynn Robinson": "Gilead",
        "Stephen King": "The People Who Live Under The Stairs"
    }
    return bestBookBy[author] ? bestBookBy[author] : `We don't have an opinion about ${author}`
}

console.log(getBestBookBy("Stephen King"));
console.log(getBestBookBy("Kazuo Ishiguro"));
console.log(getBestBookBy("Anne Rice"));


// any change to data is a "state change"
let mood = 'bad'
mood = 'good'



const lightProgression = {
    red: ['green', 'red flash'],
    green: ['yellow', 'yellow flash'],
    yellow: ['red'],
    "red flash": ['green', 'red'],
    "yellow flash": ['red']
}

// we can use a state machine to update this, according to whatever rules we want
let stopLightColor = 'red'

const updateColor = (newState) => {
    const colorOptions = lightProgression[stopLightColor]

    if (colorOptions.includes(newState)) {
        stopLightColor = newState
    } else {
        console.log(`Transition from ${stopLightColor} to ${newState} is not allowed`);
    }
}

updateColor('green')
console.log(stopLightColor);

updateColor('red')
console.log(stopLightColor);

updateColor('yellow flash')
console.log(stopLightColor);



const stateBorders = require('./constants')

class USRoadTrip {
    constructor(startingState, car, lengthInDays) {
        this.currentState = startingState
        this.statesVisited = [startingState]
        this.car = car || "some random junker" // use logical OR to add a default value
        this.lengthInDays = lengthInDays
    }

    crossBorder(newState) {
        const stateObj = stateBorders[newState]

        if (!stateObj) {
            console.log(`${newState} is not a US state`);
        } else if (stateObj.borders.includes(this.currentState)) {
            this.currentState = newState
            this.statesVisited.push(newState)
        } else {
            let stateName = this.getStateName(this.currentState)
            console.log(`${stateObj.name} isn't next to ${stateName}`);
        }
    }

    getStateName(stateAbbr) {
        return stateBorders[stateAbbr].name
    }
}

const sdbDec23RoadTrip = new USRoadTrip('or', 'Rolls Royce Phantom', 14)
sdbDec23RoadTrip.crossBorder('wa')
sdbDec23RoadTrip.crossBorder('id')
sdbDec23RoadTrip.crossBorder('mt')
sdbDec23RoadTrip.crossBorder('ca')
sdbDec23RoadTrip.crossBorder('narnia')
console.log(sdbDec23RoadTrip);

// new instance has / maintains its own state
const studentsOnly = new USRoadTrip('ne', null, 30)
console.log(studentsOnly);



// ! a tangent about logical OR and logical AND

// && returns the first false things that it finds OR the last thing (regardless of if it's truthy or falsey)
console.log('something' && 1); // 1
console.log('something' && 1 && 96 && 'hello'); // 1
console.log('something' && 0 && 100); // 0
console.log(0 && 'something'); // 0

// || returns the first true it finds, or the final thing (even if it's false)
console.log(0 || '' || [] || true || 1); // []
console.log('' || false || 0); // 0


// ! another tangent about ternaries

let attempts = 7

// the OR operator will always return the first truthy value
// so in this case, it will always return the first string
let message = "You got it in one" || "Good job!"

// if you want to return different strings in diffferent situations
// you need to introduce a condition
// this is a case for... 

// a ternary operator!
// condition ? return if true : return if false
message = attempts === 1 ? "You got it in one!!!!!" : "Good job"

// replaces code like this:
// if (attempts === 1) {
//     return ',,,'
// } else {
//     return '.....'
// }

// nested ternary
message = attempts === 1
    ? "You got it in one!!!!!"
    : attempts > 10
        ? "Wow, were you even trying?"
        : "Nice job"


const devMood = 'good'

// the condition can be as complex as it needs to be
const excelled = attempts === 1 && studentsOnly.statesVisited.includes('vt') || devMood == 'good'

message = excelled
    ? "You got it in one!!!!!"
    : "Nice job"

console.log(message);
