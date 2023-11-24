import { pick } from './pick.js';

describe('pick', () => {
  it('should create an object composed of the picked `object` properties', () => {
    const object = { a: 1, b: '2', c: 3 };
    expect(pick(object, ['a', 'c'])).toStrictEqual({ a: 1, c: 3 });
  });

  it('should create an object composed of the given symbol keys', () => {
    const foo = Symbol('foo');
    const bar = Symbol('bar');
    const object = { [foo]: 'foo', [bar]: 'bar' };

    expect(pick(object, [foo])).toStrictEqual({ [foo]: 'foo' });
  });
});
