//Q21 They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface type {
  firstName: string;
  lastName: string;
  age: number;
  Nationality: string;
  onsiteStudents: boolean;
}

let students_data: type = {
  firstName: "Muhammad",
  lastName: "Ali",
  age: 22,
  Nationality: "Pakistan",
  onsiteStudents: true,
};

console.log(students_data);