import { Emails } from './emails';
import { Name } from './name';
import { LastName } from './last-name';
import { Autocomplete } from './autocomplete';

export class PageTwo {
    name: Name;
    lastName: LastName;
    emails: Emails;
    autcomplete: Autocomplete;

    constructor() {
        this.name = new Name();
        this.lastName = new LastName();
        this.emails = new Emails();
        this.autcomplete = new Autocomplete();
    }
}
