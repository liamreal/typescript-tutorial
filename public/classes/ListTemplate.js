export class ListTemplate {
    // when creating list item, pass in unordered list will be added too
    constructor(container) {
        this.container = container;
    }
    // can specify limited set of strings as an argument in pos (so add new list element to start or end of list)
    render(item, heading, pos) {
        const li = document.createElement('li'); // typescript infers type as li element
        // heading for list item
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        // text inside list item
        const p = document.createElement('p');
        p.innerText = item.format(); // since item implements HasFormatter, we are certain format() method exists and returns a string
        li.append(p);
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else { // if not start MUST be end
            this.container.append(li);
        }
    }
}
