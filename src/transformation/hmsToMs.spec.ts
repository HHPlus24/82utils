import { hmsToMs } from './hmsToMs.js';

describe('hmsToMs', () => {
  it('should raise an error if the input is not valid', () => {
    expect(() => hmsToMs('123')).toThrow();
  });

  it('should convert 00:00:00 to 0', () => {
    expect(hmsToMs('00:00:00')).toBe(0);
  });

  it('should convert 00:00:01 to 1000', () => {
    expect(hmsToMs('00:00:01')).toBe(1000);
  });

  it('should convert 00:01:00 to 60000', () => {
    expect(hmsToMs('00:01:00')).toBe(60000);
  });

  it('should convert 01:00:00 to 3600000', () => {
    expect(hmsToMs('01:00:00')).toBe(3600000);
  });

  it('should convert HMS to ms', () => {
    expect(hmsToMs('01:02:03')).toBe(3723000);
  });
});
