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
}
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
