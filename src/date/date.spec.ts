import { toFormat, toKSTString, add, sub, diff, period } from './date.js';
describe('date', () => {
  it('toFormat - ', () => {
    const date: Date = new Date('2023-11-24');
    const result = '2023-11-24';
    expect(toFormat(date, '-')).toBe(result);
  });

  it('toFormat / ', () => {
    const date: Date = new Date('2023-11-24');
    const result = '2023/11/24';
    expect(toFormat(date, '/')).toBe(result);
  });

  it('한국 시간으로 바꾸기', () => {
    const date: Date = new Date('2023-11-24');
    expect(toKSTString(date)).toBe('2023-11-24 09:00:00');
  });

  it('add(임의의 날짜에 연,월,일,시간,분,초 더하기)', () => {
    const date = new Date('2023-11-30');
    const resultDate = new Date('2023-12-30');
    expect(add(date, { type: 'M', inc: 1 })).toEqual(resultDate);
  });

  it('sub(임의의 날짜에 연,월,일,시간,분,초 빼기)', () => {
    const date = new Date('2023-11-30');
    const resultDate = new Date('2023-11-20');
    expect(sub(date, { type: 'D', dec: 10 })).toEqual(resultDate);
  });

  it('diff(두 날짜의 차이를 일 단위로 계산)', () => {
    const startDate: Date = new Date('2023-11-24');
    const endDate: Date = new Date('2023-11-30');

    expect(diff(startDate, endDate)).toBe(6);
  });

  it('period(두 날짜의 사이의 일,주, 월 단위 날짜를 배열 생성)', () => {
    const startDate: Date = new Date('2023-11-23');
    const endDate: Date = new Date('2023-11-30');

    expect(period(startDate, endDate, 'month')).toBeInstanceOf(Array);
  });
});
