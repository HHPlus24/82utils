import { isEven } from './isEven';

describe('isEven', () => {
  it('should return true when number is even', () => {
    expect(isEven(2)).toBe(true);
  });

  it('should return false when number is odd', () => {
    expect(isEven(1)).toBe(false);
  });
});
