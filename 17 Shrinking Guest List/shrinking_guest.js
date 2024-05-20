"use strict";
// Q17 Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
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
