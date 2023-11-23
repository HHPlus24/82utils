export class Date82{
    private date: Date

    constructor(value?: string) {
        this.date = value ? new Date(value) : new Date();
    }

    toDash(): string{
        return `${this.date.getFullYear()}-${(this.date.getMonth() + 1).toString().padStart(2, '0')}-${this.date.getDate().toString().padStart(2, '0')}`;
    }

    toSlash(): string{
        return `${this.date.getFullYear()}/${(this.date.getMonth() + 1).toString().padStart(2, '0')}/${this.date.getDate().toString().padStart(2, '0')}`;
    }

    toKSTString(): string {
        const utc: number = this.date.getTime() + (this.date.getTimezoneOffset() * 60 * 1000)
        const koreaTimeDiff: number = 9 * 60 * 60 * 1000
        const kstDate: Date = new Date(utc + koreaTimeDiff)
        return kstDate.toString()
    }

    add(type: string, inc: number): Date {
        const date = new Date(this.date)

        switch (type) {
            case "y":
                date.setFullYear(date.getFullYear() + inc)
                break
            case "m":
                date.setMonth(date.getMonth() + inc)
                break
            case "d":
                date.setDate(date.getDate() + inc)
                break
            case "h":
                date.setHours(date.getHours() + inc)
                break
            case "mi":
                date.setMinutes(date.getMinutes() + inc)
                break
            case "s":
                date.setSeconds(date.getSeconds() + inc)
                break
        }

        return date
    }

    sub(type: string, dec: number): Date {
        const date = new Date(this.date)

        switch (type) {
            case "y":
                date.setFullYear(date.getFullYear() - dec)
                break
            case "m":
                date.setMonth(date.getMonth() - dec)
                break
            case "d":
                date.setDate(date.getDate() - dec)
                break
            case "h":
                date.setHours(date.getHours() - dec)
                break
            case "mi":
                date.setMinutes(date.getMinutes() - dec)
                break
            case "s":
                date.setSeconds(date.getSeconds() - dec)
                break
        }

        return date
    }

    diff(endDate: Date): number {
        const millisecondsInOneDay: number = 24 * 60 * 60 * 1000
        const diff: number = endDate.getTime() - this.date.getTime()

        return Math.floor(Math.abs(diff / millisecondsInOneDay))
    }

    period(endDate: Date, unit: string) {
        const units = [];
        let currentDate = new Date(this.date);

        while (currentDate <= endDate) {
            let value = new Date(currentDate);

            units.push(value);

            if (unit === 'week') {
                currentDate.setDate(currentDate.getDate() + 7);
            } else if (unit === 'day') {
                currentDate.setDate(currentDate.getDate() + 1);
            } else if (unit === 'month') {
                currentDate.setMonth(currentDate.getMonth() + 1);
            }
        }
        console.log(units)
        return units;
    }
}