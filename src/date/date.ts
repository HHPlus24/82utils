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

export function add(
  date: Date,
  option: { type: 'Y' | 'M' | 'D' | 'h' | 'm' | 's'; inc: number },
): Date {
  switch (option.type) {
    case 'Y':
      date.setFullYear(date.getFullYear() + option.inc);
      break;
    case 'M':
      date.setMonth(date.getMonth() + option.inc);
      break;
    case 'D':
      date.setDate(date.getDate() + option.inc);
      break;
    case 'h':
      date.setHours(date.getHours() + option.inc);
      break;
    case 'm':
      date.setMinutes(date.getMinutes() + option.inc);
      break;
    case 's':
      date.setSeconds(date.getSeconds() + option.inc);
      break;
  }

  return date;
}

export function sub(
  date: Date,
  option: { type: 'Y' | 'M' | 'D' | 'h' | 'm' | 's'; dec: number },
): Date {
  switch (option.type) {
    case 'Y':
      date.setFullYear(date.getFullYear() - option.dec);
      break;
    case 'M':
      date.setMonth(date.getMonth() - option.dec);
      break;
    case 'D':
      date.setDate(date.getDate() - option.dec);
      break;
    case 'h':
      date.setHours(date.getHours() - option.dec);
      break;
    case 'm':
      date.setMinutes(date.getMinutes() - option.dec);
      break;
    case 's':
      date.setSeconds(date.getSeconds() - option.dec);
      break;
  }

  return date;
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
