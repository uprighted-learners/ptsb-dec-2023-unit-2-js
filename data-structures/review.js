/* 
    ? When to make a class
    * when you need multiple instances of an object
        * instances all have the same shape!
        * same attributes!
        * same methods!
*/

const grossPizza = {
    toppings: ['pineapple', 'anchovies', 'olives'],
    crustStyle: 'st louis',
    source: {
        name: 'any Dominoes',
        address: 'who cares'
    },
    isReady: false,
    isDelivered: false,

    deliver() {
        this.isDelivered = true
    }
}

const greatPizza = {
    toppings: ['pepperoni'],
    crustStyle: 'detroit',
    source: {
        name: 'East Glisan Pizza Lounge',
        address: '123 Main St',
    }
}


class Pizza {
    constructor(toppings, crustStyle, sauce, source) {
        this.toppings = toppings
        this.crustStyle = crustStyle
        this.sauce = sauce
        this.source = source
        this.isReady = false
        this.isDelivered = false
    }

    deliver() {
        this.isDelivered = true
    }

    describe() {
        const toppingString = this.toppings.join(', ')
        console.log(`Pizza from ${this.source.name} with ${this.sauce} sauce and ${toppingString}`);
    }
}


const egpl = {
    name: 'East Glisan Pizza Lounge',
    address: '123 Main St',
}

const buffaloChicken = new Pizza(['chicken', 'bacon', 'ranch'], 'sicilian', 'buffalo', egpl)
const whitePie = new Pizza(['spinach'], 'normal', 'bechamel', egpl)
const margherita = new Pizza(['mozz', 'basil'], 'neopalitan', 'tomato', egpl)


const menu = [buffaloChicken, whitePie, margherita]
menu.forEach((pie) => pie.describe())
