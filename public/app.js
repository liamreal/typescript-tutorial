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
export {};
