"use strict";
//Q6 Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
// Store a person's name, with whitespace at the beginning and end.
let personName = "\t\n    Muhammad Ali    \n\t";
// Print the name once, so the whitespace around the name is displayed.
console.log(personName);
// Print the name after striping the white spaces.
console.log(personName.trim());
