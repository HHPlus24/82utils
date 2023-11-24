export function toFormat(date: Date, split: '-' | '/'): string {
  return split === '/'
    ? `${date.getFullYear()}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date
        .getDate()
        .toString()
        .padStart(2, '0')}`
    : `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date
        .getDate()
        .toString()
        .padStart(2, '0')}`;
}

export function toKSTString(date: Date): string {
  const UTC_TIMESTAMP: number = date.getTime() + date.getTimezoneOffset() * 60 * 1000;
  const KR_TIMESTAMP_DIFF: number = 9 * 60 * 60 * 1000;
  const kstDate: Date = new Date(UTC_TIMESTAMP + KR_TIMESTAMP_DIFF);
  return kstDate.toLocaleString('sv');
}

export function addMinute(date: Date): Date {
  const newDate = new Date(date.getTime() + 60 * 1000);
  return newDate;
}

export function addMinutes(date: Date, minutes: number): Date {
  const newDate = new Date(date.getTime() + minutes * 60 * 1000);
  return newDate;
}

export function addHour(date: Date): Date {
  const newDate = new Date(date.getTime() + 60 * 60 * 1000);
  return newDate;
}

export function addHours(date: Date, hours: number): Date {
  const newDate = new Date(date.getTime() + hours * 60 * 60 * 1000);
  return newDate;
}

export function addDay(date: Date): Date {
  const newDate = new Date(date.getTime() + 24 * 60 * 60 * 1000);
  return newDate;
}

export function addDays(date: Date, days: number): Date {
  const newDate = new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
  return newDate;
}

export function addMonth(date: Date): Date {
  const newDate = new Date(date.getTime());
  newDate.setMonth(newDate.getMonth() + 1);
  return newDate;
}

export function addMonths(date: Date, months: number): Date {
  const newDate = new Date(date.getTime());
  newDate.setMonth(newDate.getMonth() + months);
  return newDate;
}

export function addQuarter(date: Date): Date {
  const newDate = new Date(date.getTime());
  newDate.setMonth(newDate.getMonth() + 3);
  return newDate;
}

export function addQuarters(date: Date, quarters: number): Date {
  const newDate = new Date(date.getTime());
  newDate.setMonth(newDate.getMonth() + quarters * 3);
  return newDate;
}

export function addYear(date: Date): Date {
  const newDate = new Date(date.getTime());
  newDate.setFullYear(newDate.getFullYear() + 1);
  return newDate;
}

export function addYears(date: Date, years: number): Date {
  const newDate = new Date(date.getTime());
  newDate.setFullYear(newDate.getFullYear() + years);
  return newDate;
}

export function subMinute(date: Date): Date {
  const newDate = new Date(date.getTime() - 60 * 1000);
  return newDate;
}

export function subMinutes(date: Date, minutes: number): Date {
  const newDate = new Date(date.getTime() - minutes * 60 * 1000);
  return newDate;
}

export function subHour(date: Date): Date {
  const newDate = new Date(date.getTime() - 60 * 60 * 1000);
  return newDate;
}

export function subHours(date: Date, hours: number): Date {
  const newDate = new Date(date.getTime() - hours * 60 * 60 * 1000);
  return newDate;
}

export function subDay(date: Date): Date {
  const newDate = new Date(date.getTime() - 24 * 60 * 60 * 1000);
  return newDate;
}

export function subDays(date: Date, days: number): Date {
  const newDate = new Date(date.getTime() - days * 24 * 60 * 60 * 1000);
  return newDate;
}

export function subMonth(date: Date): Date {
  const newDate = new Date(date.getTime());
  newDate.setMonth(newDate.getMonth() - 1);
  return newDate;
}

export function subMonths(date: Date, months: number): Date {
  const newDate = new Date(date.getTime());
  newDate.setMonth(newDate.getMonth() - months);
  return newDate;
}

export function subQuarter(date: Date): Date {
  const newDate = new Date(date.getTime());
  newDate.setMonth(newDate.getMonth() - 3);
  return newDate;
}

export function subQuarters(date: Date, quarters: number): Date {
  const newDate = new Date(date.getTime());
  newDate.setMonth(newDate.getMonth() - quarters * 3);
  return newDate;
}

export function subYear(date: Date): Date {
  const newDate = new Date(date.getTime());
  newDate.setFullYear(newDate.getFullYear() - 1);
  return newDate;
}

export function subYears(date: Date, years: number): Date {
  const newDate = new Date(date.getTime());
  newDate.setFullYear(newDate.getFullYear() - years);
  return newDate;
}

export function diff(startDate: Date, endDate: Date): number {
  const millisecondsInOneDay: number = 24 * 60 * 60 * 1000;
  const diff: number = endDate.getTime() - startDate.getTime();

  return Math.floor(Math.abs(diff / millisecondsInOneDay));
}

export function period(startDate: Date, endDate: Date, period: 'month' | 'week' | 'day') {
  const periods = [];
  // let currentDate = new Date(date);

  while (startDate <= endDate) {
    let value = new Date(startDate);

    periods.push(value);

    if (period === 'week') {
      startDate.setDate(startDate.getDate() + 7);
    } else if (period === 'day') {
      startDate.setDate(startDate.getDate() + 1);
    } else if (period === 'month') {
      startDate.setMonth(startDate.getMonth() + 1);
    }
  }

  return periods;
}
