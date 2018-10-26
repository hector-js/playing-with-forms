import { IEmails } from '../models/emails';
import { EmailValidation } from './email-validation';

export function emailsValidator(emails: IEmails): { [key: string]: boolean } | null {
    const error: any = { error: true };

    if (!emails) {
        return error;
    }

    const email: string = emails.email;
    const confirm: string = emails.confirm;

    if (!email || !confirm) {
        return error;
    }

    if (email !== confirm) {
        return error;
    }

    if (!new EmailValidation(email).isValid) {
        return error;
    }
    return null;
}
