import { capitalize } from './capitalize';

describe('capitalize', () => {
  it('should capitalize the first letter of each word', () => {
    const str = 'this is a string';
    const capitalized = 'This Is A String';
    expect(capitalize(str)).toBe(capitalized);
  });
});
