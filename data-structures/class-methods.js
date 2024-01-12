/* 
    ? Class Methods
    * method is a function that is defined inside of a class
    * can be used on any class instance
*/

class Pet {
    constructor(name, species, age, color) {
        this.name = name
        this.species = species
        this.age = age
        this.color = color
    }

    birthday() {
        this.age += 1
        return `${this.name} is turning ${this.age}. Happy Birthday!`
    }
}

const amara = new Pet('Amara', 'dog', 2, 'black')
const oreo = new Pet('Oreo', 'cat', 2, 'caramel')

console.log(amara.birthday())
console.log(amara);
oreo.birthday()
oreo.birthday()
// each instance keeps track of its own state
console.log(oreo.birthday());




class BankAccount {
    constructor(ownerName, ssn) {
        this.ownerName = ownerName
        this.ssn = ssn
        this.balance = 0
    }

    // private method can only be accessed from inside the class definition
    #getNumber(num) {
        // ternary operator! 
        return typeof num == 'number'
            ? num
            : (function () { throw new Error("that should have been a number") }())

        // ? the ternary replaces all this
        // if (typeof num == 'number') {
        //     return num
        // } else {
        //     throw new Error("That input must be a number")
        // }
    }

    deposit(amount) {
        // use the private method to make sure the amount is a number
        // then add it to the balance
        this.balance += this.#getNumber(amount)
    }

    withdraw(amount) {
        amount = this.#getNumber(amount)
        if (amount > this.balance) {
            // don't let them withdraw if they don't have enough
            console.log("DENIED");
            // AND take an overdraft fee
            this.balance -= 35
        } else {
            this.balance -= amount
        }
    }

}

const olivia = new BankAccount("Olivia", "123-45-6789")
console.log(olivia);
// olivia.deposit('1000') // this one Errors, because of #getNumber()
olivia.withdraw(2500)
olivia.withdraw(25000000)
console.log(olivia);




/* 
    ? Inheritance
    * extends a parent class with a child class
*/

class SavingsAccount extends BankAccount {
    constructor(ownerName, ssn, interestRate) {
        super(ownerName, ssn)

        const rateString = interestRate.split('%')[0]
        this.interestRate = Number(rateString) / 100
    }

    accrue() {
        const accrual = this.balance * this.interestRate
        this.balance += Math.round(accrual * 100) / 100
    }

}

const jason = new SavingsAccount('Jason', '234-456-6789', '3.5%')
jason.deposit(100)
jason.accrue()
jason.accrue()
console.log(jason);



class CheckingAccount extends BankAccount {
    constructor(ownerName, ssn, savings) {
        super(ownerName, ssn)
        // this will be an instance of the SavingsAccount class
        this.savingsAccount = savings
    }

    // private methods can be used inside the class definition, but not outside
    #isGoldStatus() {
        // you can just return the boolean expression, which will resolve to true or false
        return this.savingsAccount.balance >= 10000

        // if (this.savingsAccount.balance >= 10000) {
        //     return true
        // } else {
        //     return false
        // }
    }

    // overriding the inherited withdraw method
    withdraw(amount) {
        if (amount > this.balance) {
            if (this.#isGoldStatus()) {
                // we have access to this whole SavingsAccount instance
                // can access all of its public attributes and methods!
                this.savingsAccount.withdraw(amount)
                console.log("Took care of that for you :)");
            } else {
                console.log("DENIED");
                this.balance -= 35
            }
        } else {
            this.balance -= amount
        }
    }
}

const abinavSavings = new SavingsAccount("Abinav", '3405981390823', "4.2%")
// we pass an instance of the SavingsAccount class to the constructor for CheckingAccount
const abinavChecking = new CheckingAccount("Abinav", '3405981390823', abinavSavings)


// private methods are not available on the class instance
// console.log(abinavChecking.isGoldStatus());

abinavSavings.deposit(200)
abinavChecking.withdraw(500)
console.log(abinavChecking.balance);
console.log(abinavSavings.balance);



