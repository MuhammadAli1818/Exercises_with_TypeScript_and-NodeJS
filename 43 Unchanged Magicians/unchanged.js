"use strict";
// Q43 Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
// define a function to print the magicians' names
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
// define a function to modify the magicians' names
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
        console.log(magicians[i]);
    }
}
// define an array of magicians' names
let magicians = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
show_magicians(magicians);
// make a copy of the array of magicians' names
let copy_magicians_names = magicians.slice();
make_great(copy_magicians_names);
