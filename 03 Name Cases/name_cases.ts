//Q3 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

//declare personName variable
let personName: string = "muhammad ali";

//print personName in lowercase
console.log(personName.toLowerCase());

//print personName in uppercase
console.log(personName.toUpperCase());

//print personName in titlecase
console.log(personName.replace(/\b\w/g, (c) => c.toUpperCase()));
