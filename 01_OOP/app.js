console.log("Hello, World!");
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(1 + 1);

console.log(greet("Guhan"));

//Object
const pet = { species: "Dog", name: "Jacky", age: 11 };
console.log(pet.name);

console.log(pet["species"]);

const myTri = {
  base: 3,
  height: 2,
  getArea: function () {
    return 0.5 * this.base * this.height;
  },

  getHypotenuse: function () {
    return Math.sqrt(this.base ** 2 + this.height ** 2);
  },
};

console.log(myTri.getArea());
console.log(myTri.getHypotenuse());

// class

class Triangle {
    constructor(base, height) {
        if(!Number.isFinite(base) || !Number.isFinite(height) || base <= 0 || height <= 0) {
            throw new Error("Base and height must be positive numbers.");
        }
        this.base = base;
        this.height = height;
    }

    getArea() {
        return 0.5 * this.base * this.height;
    }

    getHypotenuse() {
        return Math.sqrt(this.base ** 2 + this.height ** 2);
    }
}


class Animal {
  constructor(species, name, age) {
    this.species = species;
    this.name = name;
    this.age = age;
  }

  makeSound() {
    console.log(`${this.name} makes a sound.`);
  }
}

const myPet = new Animal("Dog", "Jacky", 11);
myPet.makeSound();


// bank account

class BankAccount {
    constructor(accountNumber, accountHolder, balance = 0) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit amount must be positive.");
        }
        this.balance += amount;
        console.log(`Deposited: $${amount}. New balance: $${this.balance}.`);
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be positive.");
        }
        if (amount > this.balance) {
            throw new Error("Insufficient funds.");
        }
        this.balance -= amount;
        console.log(`Withdrew: $${amount}. New balance: $${this.balance}.`);
    }
}


// Super 

class ColorTringle extends Triangle {
    constructor(base, height, color){
        super(base, height);
        this.color = color;     
    }
}

// multilevel inheritance

class ColorHappyTriangle extends ColorTringle {
    constructor(base, height, color, mood) {
        super (base, height, color);
        this.mood = mood;
    }
}

const happyTri = new ColorHappyTriangle(3, 4, "yellow", "happy");
console.log(happyTri.getArea());

// Static Properties

class Cat {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
    static species = "Felis catus";
}

const cat = new Cat("Whiskers", "indian short hair");
console.log(cat.name);
console.log(cat.breed); 
console.log(Cat.species); // Accessing static property through the class

// Static Methods
class MathUtil {
    static square(x) {
        return x * x;
    }

    static cube(x) {
        return x * x * x;
    }
}

console.log(MathUtil.square(3));
console.log(MathUtil.cube(2));

