class Circle {
  #radius;
  constructor(radius) {
    this.#radius = radius;
  }
  getRadius() {
    return this.#radius;
  }
}

const myCircle = new Circle(10);
// console.log(myCircle.#radius); // Property '#radius' is not accessible outside class 'Circle' because it has a private identifier.
// but it is accessible in the browser dev tools console for development purpose only
console.log(myCircle.getRadius()); // 10