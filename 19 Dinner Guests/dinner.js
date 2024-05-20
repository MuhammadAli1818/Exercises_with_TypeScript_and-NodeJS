"use strict";
//Q19 Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let guest = ["Waqas", "Mohib", "Faisal"];
// for (let i = 0; i < guest.length; i++) {
//   console.log("My friend " + guest[i] + " we invite you dinner");
// }
let absentGuest = "Mohib";
let newGuest = "Sharukh";
guest[1] = newGuest;
// for (let i = 0; i < guest.length; i++) {
//   console.log("My friend " + guest[i] + " we invite you dinner");
// }
console.log(`My friend ${absentGuest} cannot attend the Dinner`);
// Q16
console.log("Good News! We find big table so we are 3 more Guests");
guest.unshift("Sufyan");
guest.splice(3, 0, "Danyal");
guest.push("Zeeshan");
for (let i = 0; i < guest.length; i++) {
    console.log("My friend " + guest[i] + " we invite you dinner");
}
// Q17
console.log("Sorry we can't arrange big table, only two people will be invited");
while (guest.length > 2) {
    let removeGuest = guest.pop();
    console.log(`Sorry My Friend ${removeGuest}, you are not invited Dinner`);
}
for (let i = 0; i < guest.length; i++) {
    console.log("My friend " + guest[i] + " you are stil invited");
}
guest.splice(0, 2);
console.log(guest);
// Q19 Start
console.log(`total number of guest Are: ${guest.length}`);
