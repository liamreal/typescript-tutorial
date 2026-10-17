// explicit types
let character: string; // want to initialise a variable but dont yet have a value
let age: number;
let isLoggedIn: boolean;

// age = 'luigi'; // cannot assign string to explicit number type
age = 30;

// isLoggedIn = 25; // same for others
isLoggedIn = true;

// arrays
let ninjas: string[] = []; // empty array of strings

ninjas.push('shaun');

// union types
let mixed: (string|number)[] = []; // array of strings and numbers

mixed.push('hello');
mixed.push(20);
// mixed.push(false); // error when booleans unless part of union type

console.log(mixed);


// objects