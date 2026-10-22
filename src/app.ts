// classes
class Invoice {
    // shorthand way of constructing class (REQUIRES access modifiers)
    constructor(
        readonly client: string,
        // client: string // would not be allowed since no access modifier
        private details: string,
        public amount: number
    ) {}

    format() {
        return `${this.client} owes €${this.amount} for ${this.details}`;
    }
}

const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// run on submit
form.addEventListener('submit', (e: Event) => {
    e.preventDefault(); // no page refresh

    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber
    );
})