class Person {
    constructor(fName, lName) {
        this.fName = fName;
        this.lName =lName;
    }

    greeting() {
        return `Hello There ${this.fName} ${this.lName}`;
    }
}

class Customer extends Person {
    constructor(fName, lName, phone, membership) {
        super(fName, lName);
        this.phone = phone;
        this.membership = membership;
    }

    static getMembershipCost() {
        return 500;
    }
}

const john = new Customer('John', 'Doe', '555-555-5555', 'Standard');

console.log(john.greeting()); // gets greeting bc Person() is extended in Customer

// console.log(Person.getMembershipCost()); // throws error bc customer() is not extended in person
console.log(Customer.getMembershipCost()); // allowed bc the static is inside Customer()