/* 
    ? IO & Callbacks
    * Process
        * an event that runs in foreground or background on your machine
    * Node.js allows access to its process via a process object
    * This allows us to process external input and internal output (IO)
    * We do this by using process.stdin and process.stdout
*/

const process = require('process')

console.log("hello");
console.log("world");

process.stdout.write("hello ")
process.stdout.write("world")
process.stdout.write("\n\t(backslash n will make a new line)\n * \n * \n *")
process.stdout.write("this is the end my friend\n")

console.log(`This is an output from Node: PID ${process.pid}`);
console.log(`This is an output from Node: PID ${process.pid}`);


/*
    ? EVENT LISTENERS
    * .once() is an event listener. It listens for data event
    * it takes event name
    * and callback function
    * callback is a function that is triggered when an event occurs
*/

const inputHandler = (data) => {
    console.log(`You said: ${data}`)
    // process.exit()
}

process.stdin.once("data", inputHandler)

/* 
    .on() method allows continuous listen to a data stream

    process.stdin.on("data", handleInput)
    (1)     (2)  (3)  (4)     (5)
    * 1. Node's process interface
    * 2. Input data stream
    * 3. Event listener method
    * 4. Event we're listening for
    * 5. Callback fx which runs when the event occurs
*/

process.stdin.on("data", input => {
    const text = input.toString().trim()
    console.log(`on: ${text}`);

    if (text == 'quit') {
        process.exit()
    }
})


/* 
    ? Readline
    Readline gives us access to a an interface we can use to interact with the process
    in a more coherent way
*/

const readline = require("readline")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

rl.question("What is your name? ", data => {
    rl.setPrompt(`Nice to meet you, ${data}`)
    rl.prompt()
    rl.question("Where are you from? ", data2 => {
        rl.setPrompt(`I hear ${data2} is nice`)
        rl.prompt()
        rl.close()
    })
})


// this function takes in a string and returns a promise object
// the promise will resolve with the input from readline.question()
function ask(questionText) {
    return new Promise((resolve, reject) => {
        rl.question(questionText, resolve)
    })
}

// this has to be an async function because we use await within it
async function start() {
    // we await the resolution of the promise that ask() will return
    const question1 = await ask("what is your name? ")
    console.log(`Nice to meet you, ${question1}`);

    const question2 = await ask("where are you from? ")

    if (question2 == 'Idaho') {
        console.log("I'm sorry to hear that");
    } else {
        console.log(`I hear ${question2} is nice`);
    }

    rl.close()
}

start()


