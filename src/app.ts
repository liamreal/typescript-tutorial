const anchor = document.querySelector('a');

console.log(anchor);

// console.log(anchor.href); // anchor may be null so typescript gives error

// checking if null is an option
if (anchor) {
    console.log(anchor.href);
}
