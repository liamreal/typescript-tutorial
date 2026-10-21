const anchor = document.querySelector('a')!; // adding ! excludes null checking, ONLY DONE if devs sure this exists

console.log(anchor);
console.log(anchor.href); // now no error because of !

// notice how we get HTMLAnchorElement and all its related methods through a typescript intellisense, very handy

// a more advanced example:

// const form = document.querySelector('form')!; // can also grab a form, but what if we have multiple forms?
// const form = document.querySelector('.new-item-form')!; // grab a class, BUT this is not longer HTMLFormElement and is just Element
const form = document.querySelector('.new-item-form') as HTMLFormElement; // cast to HTMLFormElement

// console.log(form.children);


// inputs (using id to grab unique elements)
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// adding event listener to form to run this script once submitted
form.addEventListener('submit', (e: Event) => {
    e.preventDefault(); // prevent page from refreshing (default behaviour)

    // log all values
    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber // cast to number instead of default value being string
    );
})