// Q24 More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array


let orange = "orange";
let ten = 10;
let twenty = 20;
let fruits = ["apple", "banana", "mango"];


// Test for equality and inequality with strings
// using equal (==)
console.log("\nis orange is equal to orange")
console.log(orange == "orange");
// using not equal (!=)
console.log("\nis orange is not equal to orange")
console.log(orange != "orange");


// Test using the lower case function
// using equal (==)
console.log("\nis orange is equal to orange in lowercase")
console.log(orange.toLowerCase() == "orange");
// using not equal (!=)
console.log("\nis orange is not equal to orange in lowercase")
console.log(orange.toLowerCase() != "orange");


// Numerical tests involving equality and inequality
// using equal (==)
console.log("\nis ten is equal to twenty");
console.log(ten == twenty);
// using not equal (!=)
console.log("\nis ten is not equal to twenty");
console.log(ten != twenty);


// Numerical tests involving greater than and less than
// using greater than (>)
console.log("\nis ten is greater than twenty");
console.log(ten > twenty);
// using less than (<)
console.log("\nis ten is less than twenty");
console.log(ten < twenty);


// Numerical tests involving greater than or equal to, and less than or equal to
// using greater than or equal to (>=)
console.log("\nis ten is greater than or equal to twenty");
console.log(ten >= twenty);
// using less than or equal to (<=)
console.log("\nis ten is less than or equal to twenty");
console.log(ten <= twenty);


// Tests using "and" and "or" operators
// using and (&&)
console.log("\nis ten is greater than twenty and ten is less than twenty");
console.log(ten > twenty && ten < twenty);  
// using or (||)
console.log("\nis ten is greater than twenty or ten is less than twenty");
console.log(ten > twenty || ten < twenty);


// Test whether an item is in a array
// using include (.includes())
console.log("\nis apple include in my fruits array")
console.log(fruits.includes("apple"));


// Test whether an item is not in a array
// using not include (!.includes())
console.log("\nis apple not include in my fruits array");
console.log(!fruits.includes("apple"))
