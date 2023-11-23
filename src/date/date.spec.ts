import { Date82 } from './date'

describe('date',()=>{
    it('toDash', () => {
        const date82: Date82 = new Date82("2023-11-11 11:")
        const result = "2023-11-11"
        expect(date82.toDash()).toBe(result)
    })

    it('toSlash', () => {
        const date82: Date82 = new Date82()
        const result = "2023/11/23"
        expect(date82.toSlash()).toBe(result)
    })

    it('한국 시간으로 바꾸기', () => {
        const date82: Date82 = new Date82()

        const date: Date = new Date()
        const utc: number = date.getTime() + (date.getTimezoneOffset() * 60 * 1000)
        const koreaTimeDiff: number = 9 * 60 * 60 * 1000
        const kstDate: Date = new Date(utc + koreaTimeDiff)

        expect(date82.toKSTString()).toBe(kstDate.toString())
    })

    it('add(임의의 날짜에 연,월,일,시간,분,초 더하기)', () => {
        const date82:Date82 = new Date82('2023-11-30')

        const resultDate = new Date('2023-12-30')
        expect(date82.add("m", 1)).toEqual(resultDate)
    })

    it('sub(임의의 날짜에 연,월,일,시간,분,초 빼기)', () => {
        const date82:Date82 = new Date82('2023-11-30')

        const resultDate = new Date('2023-10-30')
        expect(date82.sub("m", 1)).toEqual(resultDate)
    })

    it('diff(두 날짜의 차이를 일 단위로 계산)', () => {
        const date82:Date82 = new Date82('2023-11-30')
        const compareDate: Date = new Date("2023-11-23")

        expect(date82.diff(compareDate)).toBe(7)
    })

    it('period(두 날짜의 사이의 일,주, 월 단위 날짜를 배열 생성)', () => {
        const date82:Date82 = new Date82('2023-11-30')
        const endDate: Date = new Date("2023-12-30")

        expect(date82.period(endDate, 'week')).toBeInstanceOf(Array)
    })
})