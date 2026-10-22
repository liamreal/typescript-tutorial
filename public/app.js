"use strict";
// classes
class Invoice {
    // fields with explicit type
    client;
    details;
    amount;
    // how constructors are specified
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    // sample method
    format() {
        return `${this.client} owes €${this.amount} for ${this.details}`;
    }
}
// creating sample objects
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
let invoices = []; // only invoice objects allowed
// invoices.push('hello'); // not allowed
// invoices.push({name: 'shaun'}); // not allowed
// invoices.push({client: string, details: string, amount: string}); // also not allowed (not specifically an Invoice and missing format method)
invoices.push(invOne); // allowed
invoices.push(invTwo); // also allowed
console.log(invoices); // list of invoices
const form = document.querySelector('.new-item-form'); // cast to HTMLFormElement
// console.log(form.children);
// inputs (using id to grab unique elements)
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// adding event listener to form to run this script once submitted
form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent page from refreshing (default behaviour)
    // log all values
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber // cast to number instead of default value being string
    );
});
