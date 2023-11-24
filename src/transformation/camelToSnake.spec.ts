import { camelToSnake } from './camelToSnake';

describe('camelToSnake', () => {
  it('should convert camel case to snake case', () => {
    const camel = 'camelCaseExample';
    const snake = 'camel_case_example';
    expect(camelToSnake(camel)).toBe(snake);
  });
});
