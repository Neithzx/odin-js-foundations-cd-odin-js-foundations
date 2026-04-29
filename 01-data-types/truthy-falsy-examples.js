// EXERCISE 1: Test truthy/falsy values
function testTruthy(value) {
  if (value) {
    console.log(`✓ "${value}" is TRUTHY`);
  } else {
    console.log(`✗ "${value}" is FALSY`);
  }
}

// Test these values:
testTruthy(false);
testTruthy(0);
testTruthy("");
testTruthy(null);
testTruthy(undefined);
testTruthy(NaN);
testTruthy("0");        // Surprise! This is truthy
testTruthy("false");    // Surprise! This is truthy
testTruthy([]);         // Surprise! This is truthy
testTruthy({});         // Surprise! This is truthy

// EXERCISE 2: == vs ===    
console.log("\n--- == vs === Comparison ---");
console.log(`5 == "5": ${5 == "5"}`);     // true (coerces string to number)
console.log(`5 === "5": ${5 === "5"}`);   // false (different types)
console.log(`0 == false: ${0 == false}`); // true (coerces)
console.log(`0 === false: ${0 === false}`); // false (different types)
console.log(`null == undefined: ${null == undefined}`); // true (special case)
console.log(`null === undefined: ${null === undefined}`); // false

// EXERCISE 3: Your turn - predict then test
console.log("\n--- Predict the Result ---");
console.log(`"" == 0: ${"" == 0}`);       // What do you think?
console.log(`"1" == 1: ${"1" == 1}`);     // What do you think?
console.log(`[] == ![]: ${[] == ![]}`);   // Mind-bending one!