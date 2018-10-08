import { IEmails } from './models/emails';
import { EmailValidation } from './validators/email-validation';

export class ViewPresenter {
    private email: string;
    private confirm: string;
    private input: string;
    private refresh: boolean;

    constructor(emails: IEmails, input: string, refresh: boolean) {
        this.email = emails.email;
        this.confirm = emails.confirm;
        this.input = input;
        this.refresh = refresh;
    }

    get view(): { [key: string]: boolean } | null {
        if (this.fromEmail && !this.refresh) {
            if ((!this.nanEmail && !this.validEmail) || (!this.validEmail && this.equals)) {
                return { emailError: true };
            }
            if ((this.nanEmail && !this.nanConfirm) || (!this.nanConfirm && this.validEmail && !this.equals)) {
                return { confirmError: true };
            }
        }
        if (this.fromConfirm && !this.refresh) {
            if ((this.nanConfirm && !this.validEmail) || (!this.nanEmail && !this.validEmail && !this.equals)) {
                return { groupError: true };
            }
            if (!this.nanEmail && !this.validEmail && this.equals) {
                return { emailError: true };
            }
            if ((this.validEmail && !this.equals) || (this.nanEmail && !this.nanConfirm)) {
                return { confirmError: true };
            }
        }
        if (!this.input && !this.refresh) {
            if (this.nanConfirm && this.nanEmail) {
                return { groupError: true };
            }
        }
        if (this.refresh) {
            if (this.nanConfirm && this.nanEmail || !this.validEmail || this.nanEmail && !this.equals) {
                return { groupError: true };
            }
            if (this.validEmail && !this.equals) {
                return { confirmError: true };
            }
        }
        return null;
    }

    private get nanEmail(): boolean { return this.email === ''; }
    private get nanConfirm(): boolean { return this.confirm === ''; }
    private get equals(): boolean { return this.email === this.confirm; }
    private get fromEmail(): boolean { return this.input === 'email'; }
    private get fromConfirm(): boolean { return this.input === 'confirm'; }
    private get validEmail(): boolean { return new EmailValidation(this.email).isValid; }
}
