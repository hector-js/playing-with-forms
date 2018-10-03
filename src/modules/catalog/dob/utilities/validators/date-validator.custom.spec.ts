import { DateValidator } from './date-validator';

describe('DateValidator - years', () => {

  const wrongYear: number = new Date().getFullYear() + 1;

  it('should be invalid with invalid date message when month and day are invalid', () => {
    const result = new DateValidator(32, 13, 1).validateDate;

    expect(result.invalidDate).toBeTruthy();
  });

  it('should be invalid with invalid date message when year and day are invalid', () => {
    const result = new DateValidator(0, 1, wrongYear).validateDate;

    expect(result.invalidDate).toBeTruthy();
  });

  it('should be invalid with invalid date message when month and year are invalid', () => {
    const result = new DateValidator(1, 0, wrongYear).validateDate;

    expect(result.invalidDate).toBeTruthy();
  });

  it('should be invalid with invalid date message when month and year are invalid', () => {
    const result = new DateValidator(0, 0, wrongYear).validateDate;

    expect(result.invalidDate).toBeTruthy();
  });

  describe('leap years', () => {
    it('should be invalid the 29th of February 2015 when is not Leap year', () => {
      const result = new DateValidator(29, 2, 2015).validateDate;

      expect(result.dayFormat).toBeTruthy();
    });
    it('should be valid the 29th of February 2016 when is not Leap year', () => {
      const result = new DateValidator(29, 2, 2016).validateDate;

      expect(result).toBeNull();
    });
    it('should be invalid the 30th of February 2016 when is not Leap year', () => {
      const result = new DateValidator(30, 2, 2016).validateDate;

      expect(result.leapError).toBeTruthy();
    });
  });

});
