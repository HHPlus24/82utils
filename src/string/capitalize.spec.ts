import { capitalize } from './capitalize.js';

describe('capitalize', () => {
  it('should capitalize the first letter of a string', () => {
    expect(capitalize('hello, world!')).toBe('Hello, world!');
  });

  it('should convert the remaining letters to lowercase', () => {
    expect(capitalize('hELLO, wORLD!')).toBe('Hello, world!');
  });

  it('should return an empty string if the input is empty', () => {
    expect(capitalize('')).toBe('');
  });
});
