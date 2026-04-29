// EXERCISE 1: Log types of core values


console.log(typeof 42);           // "number"
console.log(typeof "hello");      // "string"
console.log(typeof true);         // "boolean"
console.log(typeof null);         // "object" ← quirk!
console.log(typeof undefined);    // "undefined"
console.log(typeof []);           // "object" ← arrays are objects!
console.log(typeof {});           // "object"


// EXERCISE 2: Your name + type
const myName = "Neithzx";
console.log(`My name is ${myName} and its type is ${typeof myName}.`);

// EXERCISE 3: The null quirk
console.log(`typeof null returns: ${typeof null}`);
// Why weird? Because null is a primitive, but typeof says "object". 
// This is a historical bug in JS that we just accept.


// EXERCISE 4 (Bonus): Friendly type describer
function describeType(value) {
    if(Array.isArray(value)) {
        return "this is an array(but typeof says 'object')";
    }
    if (value === null) {
        return "This is nuull (but typeof says 'object')";  
    }
    return `This is a ${typeof value}`;
}

// Test it:

console.log(describeType([]));
console.log(describeType(null));
console.log(describeType(42));  