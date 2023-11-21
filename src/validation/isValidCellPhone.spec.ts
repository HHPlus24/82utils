import { isValidCellPhone } from './isValidCellPhone';

describe('isValidCellPhone', () => {
  it('should return true when number is valid', () => {
    expect(isValidCellPhone('01022222222')).toBe(true);
  })

  it('should return true when number(with dash) is valid', () => {
    expect(isValidCellPhone('010-2222-2222')).toBe(true);
  })

  it('should return false when number starts with deprecated numbers', () => {
    expect(isValidCellPhone('01122222222')).toBe(false);
    expect(isValidCellPhone('01622222222')).toBe(false);
    expect(isValidCellPhone('01722222222')).toBe(false);
    expect(isValidCellPhone('01822222222')).toBe(false);
    expect(isValidCellPhone('01922222222')).toBe(false);
  })

  it('should return false when number(with dash) starts with deprecated numbers', () => {
    expect(isValidCellPhone('011-2222-2222')).toBe(false);
    expect(isValidCellPhone('016-2222-2222')).toBe(false);
    expect(isValidCellPhone('017-2222-2222')).toBe(false);
    expect(isValidCellPhone('018-2222-2222')).toBe(false);
    expect(isValidCellPhone('019-2222-2222')).toBe(false);
  })

  it('should return false when number is invalid', () => {
    expect(isValidCellPhone('010-1234-123')).toBe(false);
    expect(isValidCellPhone('010-1234-12345')).toBe(false);
    expect(isValidCellPhone('0101234123')).toBe(false);
    expect(isValidCellPhone('010123412345')).toBe(false);
  });
});