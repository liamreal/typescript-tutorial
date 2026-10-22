import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from './interfaces/HasFormatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// run on submit
form.addEventListener('submit', (e: Event) => {
    e.preventDefault(); // no page refresh

    let doc: HasFormatter;

    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    } else { // BUGGY if more types added
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

})