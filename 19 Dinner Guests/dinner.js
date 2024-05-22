"use strict";
//Q19 Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
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
// for (let i = 0; i < guest.length; i++) {
//   console.log("My friend " + guest[i] + " we invite you dinner");
// }
// Q17
console.log("Sorry we can't arrange big table, only two people will be invited");
while (guest.length > 2) {
    let removedGuest = guest.pop();
    console.log(`Sorry ${removedGuest} you are not invited`);
}
for (let i = 0; i < guest.length; i++) {
    console.log("My friend " + guest[i] + " we invite you dinner");
}
// Q19 Start
console.log(guest);
guest.pop();
guest.pop();
console.log(`total number of guest Are: ${guest.length}`);
