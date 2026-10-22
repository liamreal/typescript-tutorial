import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul.item-list');
const list = new ListTemplate(ul);
// run on submit
form.addEventListener('submit', (e) => {
    e.preventDefault(); // no page refresh
    let doc;
    // gathering type value once
    const typeValue = type.value;
    // using tuples to simplify code (must be defined in 2 lines otherwise just an array with no explicit typing)
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    // explicit types, no match throws error
    switch (typeValue) {
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
});
