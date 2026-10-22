import { HasFormatter } from '../interfaces/HasFormatter.js';

export class ListTemplate {
    // our container to add list items to
    constructor(private container: HTMLUListElement) {}

    // add to start or end of list
    render(item: HasFormatter, pos: 'start' | 'end') {
        const li = document.createElement('li');

        // heading is item type (e.g. Payment/Invoice)
        const h4 = document.createElement('h4');
        h4.innerText = item.constructor.name; // dynamically get heading based on class: https://dev.to/idmontie/get-class-name-in-typescript-23ih
        li.append(h4);

        // item description
        const p = document.createElement('p');
        p.innerText = item.format(); // item implements HasFormatter => format():string exists
        li.append(p);

        if (pos === 'start') {
            this.container.prepend(li);
        } else { // if not start MUST be end
            this.container.append(li);
        }
    }
}