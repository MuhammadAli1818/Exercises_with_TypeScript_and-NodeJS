"use strict";
// Q16 More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.  • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guest = ["Waqas", "Mohib", "Faisal"];
// for (let i = 0; i < guest.length; i++) {
//   console.log("My friend " + guest[i] + " we invite you dinner");
// }
console.log(`My friend ${guest[1]} cannot attend the Dinner`);
guest[1] = "Sharukh";
// for (let i = 0; i < guest.length; i++) {
//   console.log("My friend " + guest[i] + " we invite you dinner");
// }
// Q16
console.log(`I found a bigger Dinner Table`);
guest.unshift("Okasha");
guest.splice(2, 0, "Zain");
guest.push("Ahmad");
for (let i = 0; i < guest.length; i++) {
    console.log("My friend " + guest[i] + " we invite you dinner");
}
