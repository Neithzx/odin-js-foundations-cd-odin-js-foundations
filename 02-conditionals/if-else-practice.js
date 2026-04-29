// ============================================
// EXERCISE 1: Basic if/else - Grade Calculator
// ============================================

function getGrade(score) {
  // Write conditionals to return letter grades:
  // 90-100: "A"
  // 80-89: "B"
  // 70-79: "C"
  // 60-69: "D"
  // 0-59: "F"
  // Handle edge cases: >100, <0, NaN
  
  if (score > 100 || score < 0 || Number.isNaN(score)) {
    return "Invalid score";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// Test it:
console.log("Grade Calculator:");
console.log(`Score 95: ${getGrade(95)}`); // A
console.log(`Score 82: ${getGrade(82)}`); // B
console.log(`Score 73: ${getGrade(73)}`); // C
console.log(`Score 60: ${getGrade(60)}`); // D
console.log(`Score 45: ${getGrade(45)}`); // F
console.log(`Score 105: ${getGrade(105)}`); // Invalid
console.log(`Score -5: ${getGrade(-5)}`); // Invalid

// ============================================
// EXERCISE 2: Ternary Operator
// ============================================

console.log("\n--- Ternary Operator ---");

// Convert this if/else to ternary:
const age = 20;
// if (age >= 18) {
//   console.log("Adult");
// } else {
//   console.log("Minor");
// }

// Your ternary version:
const status = age >= 18 ? "Adult" : "Minor";
console.log(`Age ${age}: ${status}`);

// Challenge: Nested ternary for price discount
// 0-50: no discount
// 51-100: 10% discount
// 101+: 20% discount
const price = 120;
const discount = price <= 50 ? 0 : price <= 100 ? 10 : 20;
const finalPrice = price * (1 - discount / 100);
console.log(`Price: $${price}, Discount: ${discount}%, Final: $${finalPrice}`);

// ============================================
// EXERCISE 3: Switch Statement - Day Checker
// ============================================

console.log("\n--- Switch Statement ---");

function getDayInfo(dayNumber) {
  // Use switch to return day info:
  // 1-5: "Weekday"
  // 6-7: "Weekend"
  // default: "Invalid day"
  
  switch(dayNumber) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return "Weekday";
    case 6:
    case 7:
      return "Weekend";
    default:
      return "Invalid day";
  }
}

console.log(`Day 3: ${getDayInfo(3)}`); // Weekday
console.log(`Day 6: ${getDayInfo(6)}`); // Weekend
console.log(`Day 9: ${getDayInfo(9)}`); // Invalid

// ============================================
// EXERCISE 4: Logical Operators (&&, ||, !)
// ============================================

console.log("\n--- Logical Operators ---");

const isLoggedIn = true;
const hasPermission = false;
const isAdmin = true;

// AND (&&) - both must be true
console.log(`Can access: ${isLoggedIn && hasPermission}`); // false

// OR (||) - at least one must be true
console.log(`Can view: ${isLoggedIn || hasPermission}`); // true

// NOT (!) - invert boolean
console.log(`Is guest: ${!isLoggedIn}`); // false

// Complex condition
const canEdit = (isLoggedIn && hasPermission) || isAdmin;
console.log(`Can edit: ${canEdit}`); // true (because isAdmin)