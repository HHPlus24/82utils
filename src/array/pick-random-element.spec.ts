import {pickRandomElement} from "./pick-random-element";

describe('pickRandomElement', () => {
  it('should return a random element from the array', () => {
    const array = [1, 2, 3, 4, 5];

    expect(array).toContain(pickRandomElement(array));
  })

  it('should return undefined if the array is empty', () => {
    const array: number[] = [];

    expect(pickRandomElement(array)).toBeUndefined();
  });
});
