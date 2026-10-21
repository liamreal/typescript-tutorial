const anchor = document.querySelector('a')!; // adding ! excludes null checking, ONLY DONE if devs sure this exists

console.log(anchor);
console.log(anchor.href); // now no error because of !


// const form = document.querySelector('form')!; // can also grab a form, but what if we have multiple forms?
const form = document.querySelector('.new-item-form')!; // grab a class, BUT this is not longer HTMLFormElement and is just Element
