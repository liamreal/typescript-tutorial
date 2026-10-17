// arrays
let names = ['luigi', 'mario', 'yoshi']; // infers type as string

// names = 'hello'; // cannot redefine array as string

names.push('toad');
// names.push(3); // error from adding number to string array
// names[0] = 3; // even replacing gives error

let numbers = [10, 20, 30, 40]; // infers type as number

numbers.push(25);
// numbers.push('shaun'); // same again
// numbers[1] = 'shaun'; // even replacing


let mixed = ['ken', 4, 'chun-li', 8, 9]; // infers type as string | number

mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;

// mixed.push(false); // cannot push boolean as not one of inferred types


// objects
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};

ninja.age = 40;
ninja.name = 'ryu';
// ninja.age = '30'; // age needs to be a number, again since type inferred
// ninja.skills = ['fighting', 'sneaking']; // cant add properties to object

// can update object to be an entirely new instance of same object (i.e. same properties)
// basically CANNOT change structure by omitting/adding properties
ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 40,
    // excommunicated: true // cannot add new properties
}






