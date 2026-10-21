"use strict";
const anchor = document.querySelector('a'); // adding ! excludes null checking, ONLY DONE if devs sure this exists
console.log(anchor);
console.log(anchor.href); // now no error because of !
