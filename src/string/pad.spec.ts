import {padEnd, padStart} from "./pad";

describe('padStart', () => {
  it('should pad string on the left side if it is shorter than length', () => {
    expect(padStart('abc', 6)).toEqual('   abc');
  });

  it('should pad multiple characters if the pad string is longer than 1 character', () => {
    expect(padStart('abc', 9, 'foo')).toEqual('foofooabc');
  });

  it('should truncate pad string if it exceeds length', () => {
    expect(padStart('abc', 7, 'foo')).toEqual('foofabc');
  });

  it('should return the original string if length is less than or equal to string.length', () => {
    expect(padStart('abc', 2)).toEqual('abc');
  });
});

describe('padEnd', () => {
  it("should pad string on the right side if it's shorter than length", () => {
    expect(padEnd('abc', 6)).toEqual('abc   ');
  });

  it('should pad multiple characters if the pad string is longer than 1 character', () => {
    expect(padEnd('abc', 9, 'foo')).toEqual('abcfoofoo');
  });

  it('should truncate pad string if it exceeds length', () => {
    expect(padEnd('abc', 7, 'foo')).toEqual('abcfoo');
  });

  it('should return the original string if length is less than or equal to string.length', () => {
    expect(padEnd('abc', 2)).toEqual('abc');
  });
});
