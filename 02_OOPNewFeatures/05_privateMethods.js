class MyClass {
  constructor() {
    console.log("Constructor called");
    this.#privateMethod();
  }
  #privateMethod() {
    console.log("PRIVATE METHOD CALLED!!!");
  }

  publicMethod() {
    this.#privateMethod();
  }
}

const myClass = new MyClass();
myClass.publicMethod();
