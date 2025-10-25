function Hi() {
    console.log(`${this.name} says Hi!`);
}

const user = {
    name: "Guhan",
    sayHi: Hi
};

user.sayHi();


class User {
    constructor(name = "Raghupathi") {
        this.name = name;
    }

    greet() {
        console.log(`${this.name} says Hello!`);
    }
}

class RaghuUser {
    name = "Kiruba";
}

const raghu = new User();
raghu.greet();
const kiruba = new RaghuUser();

const kirubaGreet = raghu.greet.call(kiruba);




// increament conter

class Counter {
    constructor(initalValue, buttonElement) {
        this.value = initalValue;
        this.buttonElement = buttonElement;
        
        this.buttonElement.addEventListener("click", this.increment);
        // just using this.increment works with button's value incremented, this refers to button element
        // but this.increment.bind(this) is the correct way to ensure 'this' refers to the Counter instance
    }

    increment() {
        console.log('this is:', this);
        this.value++;
        console.log("counter", this.value);
    }
}

const button = document.querySelector('#clickMe');
const counter = new Counter(0, button);
console.log('Initial counter value:', counter.value);