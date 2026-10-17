let character = 'mario';
let age = 30;
let isBlackBelt = false;

// can see here how uncommenting the lines below will result in editor 
// showing compiling errors due to mismatched type in reassignments

// character = 20;
character = 'luigi';

// age = 'yoshi';
age = 40;

// isBlackBelt = 'yes';
isBlackBelt = true;

const circ = (diameter: number) => {
    return diameter * Math.PI;
}


console.log(circ(7.5))