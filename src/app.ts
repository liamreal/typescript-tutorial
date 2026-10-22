
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

    // // my own testing, CANNOT overload constructors, can ONLY have one implementation, 
    // // if you wanted something like below, add default values (e.g. a: number = 0)
    // constructor(c: string, d: string) {
    //     this(c, d, 0);
    // }
}

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