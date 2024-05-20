// Q16 More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let guest: string[] = ["Waqas", "Mohib", "Faisal"];

// for (let i = 0; i < guest.length; i++) {
//   console.log("My friend " + guest[i] + " we invite you dinner");
// }

let absentGuest: string = "Mohib";
let newGuest: string = "Sharukh";

guest[1] = newGuest;

for (let i = 0; i < guest.length; i++) {
  console.log("My friend " + guest[i] + " we invite you dinner");
}
console.log(`My friend ${absentGuest} cannot attend the Dinner`);

// Q16
console.log("Good News! We find big table so we are 3 more Guests");

guest.unshift("Sufyan");
guest.splice(3,0,"Danyal");
guest.push("Zeeshan");

for (let i = 0; i < guest.length; i++) {
    console.log("My friend " + guest[i] + " we invite you dinner");
  }
