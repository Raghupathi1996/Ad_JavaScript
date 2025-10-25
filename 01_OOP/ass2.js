class ArrayUtils {
    constructor() {
        throw new Error('ArrayUtils cannot be instantiated.');
    }
    static average(arr) {
        if (arr.length === 0) 
            throw new Error("Array cannot be empty.");
        const sum = arr.reduce((acc, val) => acc + val, 0);
        return sum / arr.length;
    }

    static max(arr) {
        if (arr.length === 0) throw new Error("Array cannot be empty.");
        return Math.max(...arr);
    }
}

// const x = new ArrayUtils(); // This will throw an error
// console.log(x)


// using reduce to flattening an array of arrays
function flattenArray(arr) {
    return arr.reduce((acc, val) => acc.concat(val), []);
}  
const number = [[1, 2, 3], [4, 5], [6]];
console.log(flattenArray(number)); // [1, 2, 3, 4, 5, 6]

// Counting occurances of item in an Array
function countOccurrences(arr, item) {
    return arr.reduce((acc, val) => (val === item ? acc + 1 : acc), 0);
}  
const fruits = ['apple', 'banana', 'orange', 'apple', 'kiwi', 'banana', 'apple'];
console.log(countOccurrences(fruits, 'apple')); // 3
console.log(countOccurrences(fruits, 'banana')); // 2

// usind reduce to count frequency of items in an array
function frequencyCount(arr) {
    return arr.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});
}

const colors = ['red', 'blue', 'green', 'red', 'blue', 'red'];
console.log(frequencyCount(colors)); 
// { red: 3, blue: 2, green: 1 }

// Grouping objects by a property using reduce
function groupBy(arr, key) {
    return arr.reduce((acc, obj) => {
        const property = obj[key];  
        if (!acc[property]) {
            acc[property] = [];
        }
        acc[property].push(obj);
        return acc;
    }, {});
}

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
];

console.log(groupBy(people, 'age'));
