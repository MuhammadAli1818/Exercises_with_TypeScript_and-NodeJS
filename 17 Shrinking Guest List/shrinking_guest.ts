// Q17 Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.



let guest: string[] = ["Waqas", "Mohib", "Faisal"];

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
console.log(
  "Sorry we can't arrange big table, only two people will be invited"
);

while (guest.length > 2) {
  let removedGuest = guest.pop();
  console.log(`Sorry ${removedGuest} you are not invited`);
}

for (let i = 0; i < guest.length; i++) {
  console.log("My friend " + guest[i] + " we invite you dinner");
}