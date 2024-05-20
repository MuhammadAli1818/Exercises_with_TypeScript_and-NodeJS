"use strict";
// Q31 No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let userName = ["Admin", "Ali", "Nimra", "Maryam", "Hamza"];
if (userName.length == 0) {
    console.log("We need to find some users!:");
}
else {
    for (let i = 0; i < userName.length; i++) {
        if (userName[i] == "Admin") {
            console.log("Hello Admin, would you like to see a status report?");
        }
        else {
            console.log("Hello " + userName[i] + ", thank you for logging in again.");
        }
    }
}
