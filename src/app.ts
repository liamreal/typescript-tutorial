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

    // gathering type value once
    const typeValue = type.value;

    // using tuples to simplify code (must be defined in 2 lines otherwise just an array with no explicit typing)
    let values: [string, string, number];
    values = [toFrom.value, details.value, amount.valueAsNumber];

    // explicit types, no match throws error
    switch(typeValue) {
        case 'invoice':
            doc = new Invoice(...values); // spread operator to auto-assign tuple to args
            break;
        case 'payment':
            doc = new Payment(...values);
            break;
        default:
            throw new Error(`invalid document type: ${typeValue}`);
    }

    // use our ListTemplate render method
    list.render(doc, 'end');
})