import {omit} from "./omit";

describe('omit', () => {
  it('should create a new object without omitted keys', () => {
    const object = {'a': 1, 'b': '2', 'c': 3};

    expect(omit(object, ['a', 'c'])).toStrictEqual({'b': '2'});
  })

  it('should not omit keys given empty keys array', () => {
    const object = {'a': 1, 'b': '2', 'c': 3};

    expect(omit(object, [])).toStrictEqual(object);
  });

  it('should not omit keys from nested objects', () => {
    const object = {'a': 1, 'b': '2', 'c': 3, 'd': {'a': 1, 'e': 4}};

    expect(omit(object, ['a', 'c'])).toStrictEqual({'b': '2', 'd': {'a': 1, 'e': 4}});
  });
});
