export function format(date: Date, format: string) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    if (format === '/') {
        return `${year}/${month}/${day}`;
    } else if (format === '-') {
        return `${year}-${month}-${day}`;
    }
}

export function toKSTString(date: Date){
    const utc: number = date.getTime() + (date.getTimezoneOffset() * 60 * 1000)
    const koreaTimeDiff: number = 9 * 60 * 60 * 1000
    const kstDate: Date = new Date(utc + koreaTimeDiff)
    return kstDate.toString()
}

export function add(date: Date, option: {type: string, inc: number}){
    switch (option.type) {
        case "y":
            date.setFullYear(date.getFullYear() + option.inc)
            break
        case "m":
            date.setMonth(date.getMonth() + option.inc)
            break
        case "d":
            date.setDate(date.getDate() + option.inc)
            break
        case "h":
            date.setHours(date.getHours() + option.inc)
            break
        case "mi":
            date.setMinutes(date.getMinutes() + option.inc)
            break
        case "s":
            date.setSeconds(date.getSeconds() + option.inc)
            break
    }

    return new Date(date)
}

export function sub(date: Date, option: {type: string, dec: number}){
    switch (option.type) {
        case "y":
            date.setFullYear(date.getFullYear() - option.dec)
            break
        case "m":
            date.setMonth(date.getMonth() - option.dec)
            break
        case "d":
            date.setDate(date.getDate() - option.dec)
            break
        case "h":
            date.setHours(date.getHours() - option.dec)
            break
        case "mi":
            date.setMinutes(date.getMinutes() - option.dec)
            break
        case "s":
            date.setSeconds(date.getSeconds() - option.dec)
            break
    }

    return new Date(date)
}

export function diff(startDate: Date, endDate: Date) {
    const millisecondsInOneDay: number = 24 * 60 * 60 * 1000
    const diff: number = endDate.getTime() - startDate.getTime()

    return Math.floor(Math.abs(diff / millisecondsInOneDay))
}

export function period(startDate: Date, endDate: Date, unit: string){
    const units = [];
    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
        let value;
        if (unit === 'week') {
            value = {
                start: new Date(currentDate),
                end: new Date(currentDate.setDate(currentDate.getDate() + 6)),
            };
        } else if (unit === 'day') {
            value = new Date(currentDate);
        } else if (unit === 'month') {
            value = { year: currentDate.getFullYear(), month: currentDate.getMonth() + 1 };
        } else {
            throw new Error('Invalid unit. Use "week", "day", or "month".');
        }

        units.push(value);

        if (unit === 'week') {
            currentDate.setDate(currentDate.getDate() + 7);
        } else if (unit === 'day') {
            currentDate.setDate(currentDate.getDate() + 1);
        } else if (unit === 'month') {
            currentDate.setMonth(currentDate.getMonth() + 1);
        }
    }

    return units;
}