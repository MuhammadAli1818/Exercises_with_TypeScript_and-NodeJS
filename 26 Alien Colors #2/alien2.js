"use strict";
// Q26 Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
// define the alien color
let alien_color = "green";
// check if the alien color is green
if (alien_color === "green") {
    console.log("player just earned 5 points for shooting the alien");
}
else {
    console.log("player just earned 10 points");
}
// second block
if (alien_color === "blue") {
    console.log("\nprint the if block statment");
}
else {
    console.log("print the else block statment");
}
