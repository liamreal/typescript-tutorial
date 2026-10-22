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
    // my own improvement, reading ONCE from DOM
    const formValues = {
        toFromValue: toFrom.value,
        detailsValue: details.value,
        amountValue: amount.valueAsNumber,
        typeValue: type.value
    };
    // explicit types, no match throws error
    switch (formValues.typeValue) {
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
    list.render(doc, formValues.typeValue, 'end');
});
