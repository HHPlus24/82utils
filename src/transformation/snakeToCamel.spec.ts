import { snakeToCamel } from './snakeToCamel';

describe('snakeToCamel', () => {
  it('should convert snake case to camel case', () => {
    const snake = 'snake_case';
    const camel = 'snakeCase';
    expect(snakeToCamel(snake)).toBe(camel);
  });
});
