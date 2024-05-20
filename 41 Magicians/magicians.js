"use strict";
// Q41 Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// define a function to print the magicians' names
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
// define an array of magicians' names
let magicians = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
// call the function to print the magicians' names
show_magicians(magicians);
