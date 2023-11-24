import { isValidLandline } from './isValidLandline';

describe('isValidLandline', () => {
  it('should return false if the number is not a landline', () => {
    expect(isValidLandline('010-1234-5678')).toBe(false);
  });

  it('should return true if the number is a landline(02, 9 character)', () => {
    expect(isValidLandline('02-123-4567')).toBe(true);
  });

  it('should return true if the number is a landline(02, 10 character)', () => {
    expect(isValidLandline('02-1234-5678')).toBe(true);
  });

  it('should return true if the number is a landline(031, 10 character)', () => {
    expect(isValidLandline('031-123-4567')).toBe(true);
  });

  it('should return true if the number is a landline(032, 11 character)', () => {
    expect(isValidLandline('032-1234-5678')).toBe(true);
  });

  it('should return false if the number is not a landline(034, 11 character)', () => {
    expect(isValidLandline('034-1234-5678')).toBe(false);
  });

  it('should return false if the number is not a landline(045, 10 character)', () => {
    expect(isValidLandline('045-123-4567')).toBe(false);
  });

  it('should return false if the number is not a landline(056, 11 character)', () => {
    expect(isValidLandline('056-1234-5678')).toBe(false);
  });

  it('should return false if the number is not a landline(065, 11 character)', () => {
    expect(isValidLandline('065-1234-5678')).toBe(false);
  });

  it('should return false if the number is not a landline(070, 10 character)', () => {
    expect(isValidLandline('070-123-4567')).toBe(false);
  });
});
