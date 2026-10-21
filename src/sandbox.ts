type StringOrNum = string | number;

const logDetails = (uid: StringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}


const greet = (user: {name: string, id: StringOrNum}) => {
    console.log(`${user.name} says hello`);
}