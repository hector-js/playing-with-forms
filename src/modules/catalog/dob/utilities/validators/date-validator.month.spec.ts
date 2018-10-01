import { DateValidator } from './date-validator';

describe('DateValidator - months', () => {

  it('should be invalid when is less than 1', () => {
    const result = new DateValidator(1, 0, 1988).validateDate;

    expect(result.monthFormat).toBeTruthy();
  });

  it('should be invalid when the value is undefined', () => {
    const result = new DateValidator(1, undefined, 1988).validateDate;

    expect(result.monthFormat).toBeTruthy();
  });

  it('should be invalid when the value is null', () => {
    const result = new DateValidator(1, null, 1988).validateDate;

    expect(result.monthFormat).toBeTruthy();
  });

  it('should be invalid whe is more than 12', () => {
    const result = new DateValidator(12, 13, 1988).validateDate;

    expect(result.monthFormat).toBeTruthy();
  });

  it('should be valid when is bettween 1 and 12', () => {
    const result = new DateValidator(10, 11, 1988).validateDate;

    expect(result).toBeNull();
  });

});
