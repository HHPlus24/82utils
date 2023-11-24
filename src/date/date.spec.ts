import {
  toFormat,
  toKSTString,
  diff,
  period,
  addMinute,
  addMinutes,
  addHour,
  addHours,
  addMonth,
  addMonths,
  addQuarter,
  addQuarters,
  addYear,
  addYears,
  addDay,
  addDays,
  subMinute,
  subMinutes,
  subHour,
  subHours,
  subDay,
  subDays,
  subMonth,
  subMonths,
  subQuarter,
  subQuarters,
  subYear,
  subYears,
} from './date.js';

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

  it('addMinute(분 더하기)', () => {
    const date: Date = new Date('2023-11-24');
    const result = addMinute(date);

    expect(date.getMinutes() + 1).toBe(result.getMinutes());
  });

  it('addMinutes(수 분 더하기)', () => {
    const date: Date = new Date('2023-11-24');
    const diff = 5;
    const result = addMinutes(date, diff);

    expect(date.getMinutes() + diff).toBe(result.getMinutes());
  });

  it('addHour(시간 더하기)', () => {
    const date: Date = new Date('2023-11-24');
    const result = addHour(date);

    expect(date.getHours() + 1).toBe(result.getHours());
  });

  it('addHours(수 시간 더하기)', () => {
    const date: Date = new Date('2023-11-24');
    const diff = 5;
    const result = addHours(date, diff);

    expect(date.getHours() + diff).toBe(result.getHours());
  });

  it('addDay(일 더하기)', () => {
    const date: Date = new Date('2023-11-24');
    const result = addDay(date);

    expect(date.getDate() + 1).toBe(result.getDate());
  });

  it('addDays(수 일 더하기)', () => {
    const date: Date = new Date('2023-11-24');
    const diff = 5;
    const result = addDays(date, diff);

    expect(date.getDate() + diff).toBe(result.getDate());
  });

  it('addMonth(월 더하기)', () => {
    const date: Date = new Date('2023-11-24');
    const result = addMonth(date);

    expect(date.getMonth() + 1).toBe(result.getMonth());
  });

  it('addMonths(수 월 더하기)', () => {
    const date: Date = new Date('2023-11-24');
    const diff = 5;
    const result = addMonths(date, diff);

    expect((date.getMonth() + diff) % 12).toBe(result.getMonth());
  });

  it('addQuarter(분기 더하기)', () => {
    const date: Date = new Date('2023-11-24');
    const result = addQuarter(date);

    expect((date.getMonth() + 3) % 12).toBe(result.getMonth());
  });

  it('addQuarters(수 분기 더하기)', () => {
    const date: Date = new Date('2023-11-24');
    const diff = 5;
    const result = addQuarters(date, diff);

    expect((date.getMonth() + diff * 3) % 12).toBe(result.getMonth());
  });

  it('addYear(년 더하기)', () => {
    const date: Date = new Date('2023-11-24');
    const result = addYear(date);

    expect(date.getFullYear() + 1).toBe(result.getFullYear());
  });

  it('addYears(수 년 더하기)', () => {
    const date: Date = new Date('2023-11-24');
    const diff = 5;
    const result = addYears(date, diff);

    expect(date.getFullYear() + diff).toBe(result.getFullYear());
  });

  it('subMinute(분 빼기)', () => {
    const date: Date = new Date('2023-11-24');
    const result = subMinute(date);

    expect((date.getMinutes() - 1 + 60) % 60).toBe(result.getMinutes());
  });

  it('subMinutes(수 분 빼기)', () => {
    const date: Date = new Date('2023-11-24');
    const diff = 5;
    const result = subMinutes(date, diff);

    expect((date.getMinutes() - diff + 60) % 60).toBe(result.getMinutes());
  });

  it('subHour(시간 빼기)', () => {
    const date: Date = new Date('2023-11-24');
    const result = subHour(date);

    expect((date.getHours() - 1 + 24) % 24).toBe(result.getHours());
  });

  it('subHours(수 시간 빼기)', () => {
    const date: Date = new Date('2023-11-24');
    const diff = 5;
    const result = subHours(date, diff);

    expect((date.getHours() - diff + 24) % 24).toBe(result.getHours());
  });

  it('subDay(일 빼기)', () => {
    const date: Date = new Date('2023-11-24');
    const result = subDay(date);

    expect((date.getDate() - 1 + 30) % 30).toBe(result.getDate());
  });

  it('subDays(수 일 빼기)', () => {
    const date: Date = new Date('2023-11-24');
    const diff = 5;
    const result = subDays(date, diff);

    expect((date.getDate() - diff + 30) % 30).toBe(result.getDate());
  });

  it('subMonth(월 빼기)', () => {
    const date: Date = new Date('2023-11-24');
    const result = subMonth(date);

    expect((date.getMonth() - 1 + 12) % 12).toBe(result.getMonth());
  });

  it('subMonths(수 월 빼기)', () => {
    const date: Date = new Date('2023-11-24');
    const diff = 5;
    const result = subMonths(date, diff);

    expect((date.getMonth() - diff + 12) % 12).toBe(result.getMonth());
  });

  it('subQuarter(분기 빼기)', () => {
    const date: Date = new Date('2023-11-24');
    const result = subQuarter(date);

    expect((date.getMonth() - 3 + 12) % 12).toBe(result.getMonth());
  });

  it('subQuarters(수 분기 빼기)', () => {
    const date: Date = new Date('2023-11-24');
    const diff = 5;
    const result = subQuarters(date, diff);

    expect((date.getMonth() - diff * 3 + 12) % 12).toBe(result.getMonth());
  });

  it('subYear(년 빼기)', () => {
    const date: Date = new Date('2023-11-24');
    const result = subYear(date);

    expect(date.getFullYear() - 1).toBe(result.getFullYear());
  });

  it('subYears(수 년 빼기)', () => {
    const date: Date = new Date('2023-11-24');
    const diff = 5;
    const result = subYears(date, diff);

    expect(date.getFullYear() - diff).toBe(result.getFullYear());
  });

  it('diff(두 날짜의 차이를 일 단위로 계산)', () => {
    const startDate: Date = new Date('2023-11-24');
    const endDate: Date = new Date('2023-11-30');

    expect(diff(startDate, endDate)).toBe(6);
  });

  it('period(두 날짜의 사이의 일 단위 날짜를 배열 생성)', () => {
    const startDate: Date = new Date('2023-11-23');
    const endDate: Date = new Date('2023-11-30');
    const arr = period(startDate, endDate, 'day');

    expect(arr).toBeInstanceOf(Array);
    expect(arr.length).toBe(8);
  });

  it('period(두 날짜의 사이의 주 단위 날짜를 배열 생성)', () => {
    const startDate: Date = new Date('2023-11-23');
    const endDate: Date = new Date('2023-11-30');
    const arr = period(startDate, endDate, 'week');

    expect(arr).toBeInstanceOf(Array);
    expect(arr.length).toBe(2);
  });

  it('period(두 날짜의 사이의 월 단위 날짜를 배열 생성)', () => {
    const startDate: Date = new Date('2023-11-23');
    const endDate: Date = new Date('2024-02-30');
    const arr = period(startDate, endDate, 'month');

    expect(arr).toBeInstanceOf(Array);
    expect(arr.length).toBe(4);
  });
});
