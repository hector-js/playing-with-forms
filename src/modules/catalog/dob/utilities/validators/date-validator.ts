export class DateValidator {

    private day: number;
    private month: number;
    private year: number;

    private daysPerMonth: number[] = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    constructor(day: number, month: number, year: number) {
        this.day = day;
        this.month = month;
        this.year = year;
        if (this.isLeapYear) {
            this.daysPerMonth[1] = 29;
        }
    }

    get validateDate(): any {
        let dayFormatFlag: boolean;
        let monthFormatFlag: boolean;
        let yearFormatFlag: boolean;
        let jsonResolve = null;

        if (this.dayFormat) {
            jsonResolve = this.isLeapYear && this.month === 2 ? { leapError: true } : { dayFormat: true };
            dayFormatFlag = true;
        }
        if (this.monthFormat) {
            jsonResolve = { monthFormat: true };
            monthFormatFlag = true;
        }
        if (this.yearFormat) {
            jsonResolve = { yearFormat: true };
            yearFormatFlag = true;
        }
        if (yearFormatFlag && monthFormatFlag || yearFormatFlag && dayFormatFlag || dayFormatFlag && monthFormatFlag) {
            return { invalidDate: true };
        }
        return jsonResolve;
    }

    private get dayFormat(): boolean {
        return !this.day || this.day < 1 || this.day > this.daysPerMonth[this.month - 1];
    }

    private get monthFormat(): boolean {
        return !this.month || this.month < 1 || this.month > 12;
    }

    private get yearFormat(): boolean {
        const currentYear = new Date().getFullYear();
        return !this.year || this.year < 1 || this.year > currentYear;
    }

    private get isLeapYear() {
        if ((this.year < 1900) || (this.year > 2100)) {
            return false;
        }
        return (((this.year % 4 === 0) && (this.year % 100 !== 0)) || (this.year % 400 === 0));
      }
}
