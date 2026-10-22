// interfaces
interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

// const me: IsPerson = {}; // cannot instantiate without necessary fields/methods

const me: IsPerson = {
    name: 'shaun',
    age: 30,
    // dont need to define return type of methods, typescript infers and, if it doesnt match interface, displays error
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number) { // typescript inferred return type as number, and matched interface
        console.log('I spent', amount);
        return amount;
    },
    // skills: [] // cannot add -- does not match interface
};

const greetPerson = (person: IsPerson) => {
    console.log('hello ', person.name); // intellisense autocompletes IsPerson properties
}

// greetPerson({ name: 'shaun' }); // not an object with IsPerson interface
greetPerson(me); // allowed as it implements IsPerson

let someone: IsPerson; // in future needs to match structure of IsPerson

// greetPerson(someone); // no implementation yet so is undefined

console.log(me);

import { Invoice } from "./classes/Invoice.js";

const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// run on submit
form.addEventListener('submit', (e: Event) => {
    e.preventDefault(); // no page refresh

    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber
    );
})