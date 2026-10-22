
// classes
class Invoice {
    // fields with explicit type
    client: string;
    details: string;
    amount: number;

    // how constructors are specified
    constructor(c: string, d: string, a: number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    // sample method
    format() {
        return `${this.client} owes €${this.amount} for ${this.details}`;
    }
}

// creating sample objects
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

console.log(invOne, invTwo);

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