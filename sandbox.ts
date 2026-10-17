// explicit types
let character: string; // want to initialise a variable but dont yet have a value
let age: number;
let isLoggedIn: boolean;

// age = 'luigi'; // cannot assign string to explicit number type
age = 30;

// isLoggedIn = 25; // same for others
isLoggedIn = true;

// arrays
let ninjas: string[]; // array of strings

// ninjas.push('new'); // cannot push to array initialised without value

// ninjas = [10, 23]; // not allowed since values not string
ninjas = ['yoshi', 'mario'];


// union types


// objects