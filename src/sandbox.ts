type StringOrNum = string | number;
type objWithName = { name: string, uid: StringOrNum };

const logDetails = (uid: StringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}


const greet = (user: objWithName) => {
    console.log(`${user.name} says hello`);
}

// easy to reuse type aliases in other functions that require that kind of type
const greetAgain = (user: objWithName) => {
    console.log(`${user.name} says hello`);
}