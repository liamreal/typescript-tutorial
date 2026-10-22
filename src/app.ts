import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from './interfaces/HasFormatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul.item-list') as HTMLUListElement;
const list = new ListTemplate(ul);

// run on submit
form.addEventListener('submit', (e: Event) => {
    e.preventDefault(); // no page refresh

    let doc: HasFormatter;

    // my own improvement, reading ONCE from DOM
    const formValues = { 
        toFromValue: toFrom.value, 
        detailsValue: details.value, 
        amountValue: amount.valueAsNumber,
        typeValue: type.value
    }

    // explicit types, no match throws error
    switch(formValues.typeValue) {
        case 'invoice':
            doc = new Invoice(formValues.toFromValue, formValues.detailsValue, formValues.amountValue);
            break;
        case 'payment':
            doc = new Payment(formValues.toFromValue, formValues.detailsValue, formValues.amountValue);
            break;
        default:
            throw new Error(`invalid document type: ${type.value}`);
    }

    // use our ListTemplate render method
    list.render(doc, 'end');
})