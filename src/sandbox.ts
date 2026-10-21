

const logDetails = (uid: string | number, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}


const greet = (user: {name: string, id: string | number}) => {
    console.log(`${user.name} says hello`);
}