"use strict";
//Q15 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let guest = ["Waqas", "Mohib", "Faisal"];
// for (let i = 0; i < guest.length; i++) {
//    console.log("My friend " + guest[i] + " we invite you dinner");
// }
let absentGuest = "Mohib";
let newGuest = "Sharukh";
guest[1] = newGuest;
for (let i = 0; i < guest.length; i++) {
    console.log("My friend " + guest[i] + " we invite you dinner");
}
console.log(`My friend ${absentGuest} cannot attend the Dinner`);
