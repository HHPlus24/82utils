import { range } from './range.js';

describe('range', () => {
  it('range(1, 5, 1) should return [1, 2, 3, 4]', () => {
    expect(range(1, 5, 1)).toEqual([1, 2, 3, 4]);
  });

  it('range(1, 5, 2) should return [1, 3]', () => {
    expect(range(1, 5, 2)).toEqual([1, 3]);
  });

  it('range(1, 6, 2) should return [1, 3, 5]', () => {
    expect(range(1, 6, 2)).toEqual([1, 3, 5]);
  });

  it('range(0, -4, -1) should return [0, -1, -2, -3]', () => {
    expect(range(0, -4, -1)).toEqual([0, -1, -2, -3]);
  });

  it('range(5, 1, -1) should return [5, 4, 3, 2]', () => {
    expect(range(5, 1, -1)).toEqual([5, 4, 3, 2]);
  });

  it('range(1, 2, -1) should return []', () => {
    expect(range(1, 2, -1)).toEqual([]);
  });

  it('range(0, -5, -2) should return [0, -2, -4]', () => {
    expect(range(0, -5, -2)).toEqual([0, -2, -4]);
  });

  it('range(0, -6, -2) should return [0, -2, -4]', () => {
    expect(range(0, -6, -2)).toEqual([0, -2, -4]);
  });

  it('range(5) should return [0, 1, 2, 3, 4]', () => {
    expect(range(5)).toEqual([0, 1, 2, 3, 4]);
  });

  it('range(0) should return []', () => {
    expect(range(0)).toEqual([]);
  });

  it('range(-1) should return []', () => {
    expect(range(-1)).toEqual([]);
  });
});
