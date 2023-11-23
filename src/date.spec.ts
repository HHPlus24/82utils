import {format, toKSTString, add, sub, diff, period} from './date'
describe('date',()=>{
    it('format', () => {
        const date: Date = new Date()
        const result = "2023/11/23"
        expect(format(date, "/")).toBe(result)
    })

    it('한국 시간으로 바꾸기', () => {
        const date: Date = new Date()
        const utc: number = date.getTime() + (date.getTimezoneOffset() * 60 * 1000)
        const koreaTimeDiff: number = 9 * 60 * 60 * 1000
        const kstDate: Date = new Date(utc + koreaTimeDiff)

        expect(toKSTString(date)).toBe(kstDate.toString())
    })

    it('add(임의의 날짜에 연,월,일,시간,분,초 더하기)', () => {
        const date = new Date('2023-11-30')
        const option = { type: 'd', inc: 1}

        const resultDate = new Date('2023-12-01')
        expect(add(date, option)).toEqual(resultDate)
    })

    it('sub(임의의 날짜에 연,월,일,시간,분,초 빼기)', () => {
        const date = new Date('2023-11-30')
        const option = { type: 'd', dec: 1}

        const resultDate = new Date('2023-11-29')
        expect(sub(date, option)).toEqual(resultDate)
    })

    it('diff(두 날짜의 차이를 일 단위로 계산)', () => {
        const startDate: Date = new Date("2023-11-24")
        const endDate: Date = new Date("2023-11-23")

        expect(diff(startDate, endDate)).toBe(1)
    })

    it('period(두 날짜의 사이의 일,주, 월 단위 날짜를 배열 생성)', () => {
        const startDate: Date = new Date("2023-11-23")
        const endDate: Date = new Date("2023-11-30")

        expect(period(startDate, endDate, 'week')).toBeInstanceOf(Array)
    })
})