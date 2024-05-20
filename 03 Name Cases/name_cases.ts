//Q3 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName: string = "muhammad ali";

// print name in lowercase, uppercase, and titlecase.

//LowerCase
console.log("LowerCase: " + personName.toLowerCase());

//UpperCase
console.log("UpperCase: " + personName.toUpperCase());

//TitleCase
console.log(
  "TitleCase: " + personName.replace(/\b\w/g, (c) => c.toUpperCase())
);
