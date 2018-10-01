import { DateValidator } from './date-validator';

describe('DateValidator - years', () => {

  const wrongYear: number = new Date().getFullYear() + 1;

  it('should be invalid when is less than 1', () => {
    const result = new DateValidator(1, 11, 0).validateDate;

    expect(result.yearFormat).toBeTruthy();
  });

  it('should be invalid when the value is undefined', () => {
    const result = new DateValidator(1, 11, undefined).validateDate;

    expect(result.yearFormat).toBeTruthy();
  });

  it('should be invalid when the value is null', () => {
    const result = new DateValidator(1, 11, null).validateDate;

    expect(result.yearFormat).toBeTruthy();
  });

  it('should be invalid whe is more than 12', () => {
    const result = new DateValidator(12, 12, wrongYear).validateDate;

    expect(result.yearFormat).toBeTruthy();
  });

  it('should be valid when is bettween 1 and 12', () => {
    const result = new DateValidator(10, 11, 1988).validateDate;

    expect(result).toBeNull();
  });

});
