// const me: IsPerson = {}; // cannot instantiate without necessary fields/methods
const me = {
    name: 'shaun',
    age: 30,
    // dont need to define return type of methods, typescript infers and, if it doesnt match interface, displays error
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    },
    // skills: [] // cannot add -- does not match interface
};
console.log(me);
import { Invoice } from "./classes/Invoice.js";
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// run on submit
form.addEventListener('submit', (e) => {
    e.preventDefault(); // no page refresh
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
