// Q42 Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

// define a function to print the magicians' names
function show_magicians(magicians: string[]) {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// define a function to modify the magicians' names
function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
        console.log(magicians[i]);
    }
}

// define an array of magicians' names
let magicians = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];

console.log("Orignal function")
// print the magicians' names
show_magicians(magicians);

console.log("\n")

console.log("Modified function")
// modify the magicians' names
make_great(magicians);

