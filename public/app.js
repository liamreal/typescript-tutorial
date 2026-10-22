import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// run on submit
form.addEventListener('submit', (e) => {
    e.preventDefault(); // no page refresh
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else { // BUGGY if more types added
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    // const toFromValue = toFrom.value;
    // const detailsValue = details.value;
    // const amountValue = amount.valueAsNumber;
    // if (type.value === 'invoice') {
    //     doc = new Invoice(toFromValue, detailsValue, amountValue);
    // } else if (type.value === 'payment') {
    //     doc = new Payment(toFromValue, detailsValue, amountValue);
    // }
    console.log(doc);
});
