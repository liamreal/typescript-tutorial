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

    // my own improvement, reading ONCE from DOM
    const formValues = { 
        toFromValue: toFrom.value, 
        detailsValue: details.value, 
        amountValue: amount.valueAsNumber
    }

    // explicit types, no match throws error
    switch(type.value) {
        case 'invoice':
            doc = new Invoice(formValues.toFromValue, formValues.detailsValue, formValues.amountValue);
            break;
        case 'payment':
            doc = new Payment(formValues.toFromValue, formValues.detailsValue, formValues.amountValue);
            break;
        default:
            throw new Error(`invalid document type: ${type.value}`);
    }

    console.log(doc);
})