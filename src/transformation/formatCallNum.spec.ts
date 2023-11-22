import { formatCallNum } from './formatCallNum';

describe('formatCallNum', () => {
  it('should convert 15881234 to 1588-1234', () => {
    expect(formatCallNum('15881234')).toBe('1588-1234');
  });

  it('should convert 021234567 to 02-123-4567', () => {
    expect(formatCallNum('021234567')).toBe('02-123-4567');
  });

  it('should convert 0212345678 to 02-1234-5678', () => {
    expect(formatCallNum('0212345678')).toBe('02-1234-5678');
  });

  it('should convert 0312345678 to 031-234-5678', () => {
    expect(formatCallNum('0312345678')).toBe('031-234-5678');
  });

  it('should convert 03123456789 to 031-2345-6789', () => {
    expect(formatCallNum('03123456789')).toBe('031-2345-6789');
  });

  it('should convert 01012345678 to 010-1234-5678', () => {
    expect(formatCallNum('01012345678')).toBe('010-1234-5678');
  });

  it('should return 1588-1234 when 1588-1234 is given', () => {
    expect(formatCallNum('1588-1234')).toBe('1588-1234');
  });

  it('should return 02-123-4567 when 02-123-4567 is given', () => {
    expect(formatCallNum('02-123-4567')).toBe('02-123-4567');
  });

  it('should return 02-1234-5678 when 02-1234-5678 is given', () => {
    expect(formatCallNum('02-1234-5678')).toBe('02-1234-5678');
  });

  it('should return 031-234-5678 when 031-234-5678 is given', () => {
    expect(formatCallNum('031-234-5678')).toBe('031-234-5678');
  });

  it('should return 031-2345-6789 when 031-2345-6789 is given', () => {
    expect(formatCallNum('031-2345-6789')).toBe('031-2345-6789');
  });

  it('should return 010-1234-5678 when 010-1234-5678 is given', () => {
    expect(formatCallNum('010-1234-5678')).toBe('010-1234-5678');
  });
});
