import { DateValidator } from './date-validator';

describe('DateValidator- day validation', () => {

  it('should be invalid when is less than 1', () => {
    const result = new DateValidator(0, 11, 1989).validateDate();

    expect(result.dayFormat).toBeTruthy();
  });

  it('should be invalid when the value is undefined', () => {
    const result = new DateValidator(undefined, 11, 1989).validateDate();

    expect(result.dayFormat).toBeTruthy();
  });

  it('should be invalid when the value is null', () => {
    const result = new DateValidator(null, 11, 1989).validateDate();

    expect(result.dayFormat).toBeTruthy();
  });

  describe('months limits', () => {
    describe('January', () => {
      it('invalid more than 31', () => {
        const result = new DateValidator(32, 1, 1989).validateDate();

        expect(result.dayFormat).toBeTruthy();
      });
      it('valid less than 31', () => {
        const result = new DateValidator(31, 1, 1988).validateDate();

        expect(result).toBeNull();
      });
    });
    describe('February', () => {
      it('invalid more than 28', () => {
        const result = new DateValidator(29, 2, 1989).validateDate();

        expect(result.dayFormat).toBeTruthy();
      });
      it('valid less than 28', () => {
        const result = new DateValidator(28, 2, 1989).validateDate();

        expect(result).toBeNull();
      });
    });
    describe('March', () => {
      it('invalid more than 31', () => {
        const result = new DateValidator(32, 3, 1988).validateDate();

        expect(result.dayFormat).toBeTruthy();
      });
      it('valid less than 31', () => {
        const result = new DateValidator(31, 3, 1988).validateDate();

        expect(result).toBeNull();
      });
    });
    describe('April', () => {
      it('invalid more than 30', () => {
        const result = new DateValidator(31, 4, 1988).validateDate();

        expect(result.dayFormat).toBeTruthy();
      });
      it('valid less than 30', () => {
        const result = new DateValidator(30, 4, 1988).validateDate();

        expect(result).toBeNull();
      });
    });
    describe('May', () => {
      it('invalid more than 31', () => {
        const result = new DateValidator(32, 5, 1988).validateDate();

        expect(result.dayFormat).toBeTruthy();
      });
      it('valid less than 31', () => {
        const result = new DateValidator(31, 5, 1988).validateDate();

        expect(result).toBeNull();
      });
    });
    describe('June', () => {
      it('invalid more than 30', () => {
        const result = new DateValidator(31, 6, 1988).validateDate();

        expect(result.dayFormat).toBeTruthy();
      });
      it('valid less than 30', () => {
        const result = new DateValidator(30, 6, 1988).validateDate();

        expect(result).toBeNull();
      });
    });
    describe('July', () => {
      it('invalid more than 31', () => {
        const result = new DateValidator(32, 7, 1988).validateDate();

        expect(result.dayFormat).toBeTruthy();
      });
      it('valid less than 31', () => {
        const result = new DateValidator(31, 7, 1988).validateDate();

        expect(result).toBeNull();
      });
    });
    describe('Augoust', () => {
      it('invalid more than 31', () => {
        const result = new DateValidator(32, 8, 1988).validateDate();

        expect(result.dayFormat).toBeTruthy();
      });
      it('valid less than 31', () => {
        const result = new DateValidator(31, 8, 1988).validateDate();

        expect(result).toBeNull();
      });
    });
    describe('September', () => {
      it('invalid more than 30', () => {
        const result = new DateValidator(31, 9, 1988).validateDate();

        expect(result.dayFormat).toBeTruthy();
      });
      it('valid less than 30', () => {
        const result = new DateValidator(30, 9, 1988).validateDate();

        expect(result).toBeNull();
      });
    });
    describe('October', () => {
      it('invalid more than 31', () => {
        const result = new DateValidator(32, 10, 1988).validateDate();

        expect(result.dayFormat).toBeTruthy();
      });
      it('valid less than 31', () => {
        const result = new DateValidator(31, 10, 1988).validateDate();

        expect(result).toBeNull();
      });
    });
    describe('November', () => {
      it('invalid more than 30', () => {
        const result = new DateValidator(31, 11, 1988).validateDate();

        expect(result.dayFormat).toBeTruthy();
      });
      it('valid less than 30', () => {
        const result = new DateValidator(30, 11, 1988).validateDate();

        expect(result).toBeNull();
      });
    });
    describe('December', () => {
      it('invalid more than 31', () => {
        const result = new DateValidator(32, 12, 1988).validateDate();

        expect(result.dayFormat).toBeTruthy();
      });
      it('valid less than 31', () => {
        const result = new DateValidator(31, 12, 1988).validateDate();

        expect(result).toBeNull();
      });
    });
  });

});
