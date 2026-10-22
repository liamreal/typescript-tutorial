import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
let docOne; // will need to have same format as HasFormatter
let docTwo;
// let docThree: HasFormatter & HasPrinter; // can combine it to require multiple DIFFERENT interfaces
// let docFour: HasFormatter & HasFormatter; // can also combine same one, equivalent to just having one HasFormatter
// can create an Invoice obj and store in docOne since Invoice obj implements HasFormatter
docOne = new Invoice('yoshi', 'web work', 250);
// can do same with Payment obj for docTwo
docTwo = new Payment('mario', 'plumbing work', 200);
let docs = []; // only objects that implement this interface can be added to array
docs.push(docOne);
docs.push(docTwo);
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
