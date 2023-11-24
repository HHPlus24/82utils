import {pluck} from "./pluck.js";

export interface Person {
  id: number;
  name: string;
  age: number;
}

describe('pluck', () => {
  it('should pluck the value of a property from each item in the array', ()=> {
    const items: Person[] = [
      { id: 1, name: 'Bob', age: 20 },
      { id: 2, name: 'Alice', age: 30 },
      { id: 3, name: 'Frank', age: 40 },
    ];

    const names = pluck(items, 'name');

    expect(names).toEqual(['Bob', 'Alice', 'Frank']);
  });

  it('should return empty array if items is empty', () => {
    const items: Person[] = [];

    const ids = pluck(items, 'id');

    expect(ids).toEqual([]);
  })
});
