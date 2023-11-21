import { camelToSnake } from './camelToSnake';

describe('camelToSnake', () => {
  it('should convert camel case to snake case', () => {
    const camel = 'camelCase';
    const snake = 'camel_case';
    expect(camelToSnake(camel)).toBe(snake);
  });
});
