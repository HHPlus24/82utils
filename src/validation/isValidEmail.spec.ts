import { isValidEmail } from './isValidEmail';

describe('isValidEmail', () => {
  it('should return true when email is valid', () => {
    const email = 'validEmail@validEmail.com';
    expect(isValidEmail(email)).toBe(true);
  });

  it('should return false when email is empty', () => {
    const email = '';
    expect(isValidEmail(email)).toBe(false);
  });

  it('should return false when email is invalid', () => {
    const email = 'invalidEmail';
    expect(isValidEmail(email)).toBe(false);
  });

  it('should return false when email is invalid', () => {
    const email = 'invalidEmail@';
    expect(isValidEmail(email)).toBe(false);
  });

  it('should return false when email is invalid', () => {
    const email = 'invalidEmail@invalid';
    expect(isValidEmail(email)).toBe(false);
  });

  it('should return false when email is invalid', () => {
    const email = 'invalidEmail@invalid.';
    expect(isValidEmail(email)).toBe(false);
  });

  it('should return false when email is invalid', () => {
    const email = 'invalidEmail@invalid.c';
    expect(isValidEmail(email)).toBe(false);
  });

  it('should return false when email is invalid', () => {
    const email = 'invalidEmail@invalid.invalid';
    expect(isValidEmail(email)).toBe(false);
  });
});
