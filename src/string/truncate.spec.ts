import {truncate} from "./truncate";

describe('truncate', () => {
  it('truncates a string to a given length', () => {
    const expected = 'hi-diddly-ho there, neighbo...';

    const actual = truncate('hi-diddly-ho there, neighborino');

    expect(actual).toEqual(expected);
  });

  it('given a length less than the length of the string, returns the string', () => {
    const expected = 'hi-diddly-ho there, neighborino';

    const actual = truncate('hi-diddly-ho there, neighborino', {
      length: 100
    });

    expect(actual).toEqual(expected);
  });

  it('truncates a string to a given length with a custom omission', () => {
    const expected = 'hi-diddly-ho there, neig [...]';

    const actual = truncate('hi-diddly-ho there, neighborino', {
      'omission': ' [...]'
    })

    expect(actual).toEqual(expected);
  });
});
