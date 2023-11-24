import { randomString } from './randomString';

describe('randomString', () => {
  it('should create a random string of specified length', () => {
    expect(randomString(10)).toHaveLength(10);
  });
});
