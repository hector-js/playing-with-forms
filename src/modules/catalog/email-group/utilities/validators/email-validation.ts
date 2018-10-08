
export class EmailValidation {

    private email: string;
    private error: boolean;
    private regex: RegExp;

    constructor(email: string, regex?: RegExp) {
        this.email = email;
        this.regex = regex;
    }

    get isValid(): boolean {
        return this.isEmpty
            .matchEmailTemplate
            .end;
    }

    private get isEmpty(): EmailValidation {
        if (!this.email || this.email === '') {
            this.error = true;
        }
        return this;
    }

    private get matchEmailTemplate(): EmailValidation {

        const regex: RegExp = this.regex ? this.regex : /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        if (!this.email.match(regex)) {
            this.error = true;
        }
        return this;
    }

    private get end(): boolean {
        return !this.error;
    }


}
