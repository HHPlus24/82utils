import { phoneNumberToString, numberWithCommas, removeCommasFromNumber } from './format.js';

describe('format', () => {
  it('phoneNumberToString', () => {
    const phoneNumber: string = '01012344444'
    expect(phoneNumberToString(phoneNumber)).toBe('010-1234-4444')
  })

  it('phoneNumberToString', () => {
    const phoneNumber: string = '029994444'
    expect(phoneNumberToString(phoneNumber)).toBe('02-999-4444')
  })

  it('phoneNumberToString', () => {
    const phoneNumber: string = '0299994444'
    expect(phoneNumberToString(phoneNumber)).toBe('02-9999-4444')
  })

  it('phoneNumberToString', () => {
    const phoneNumber: string = '15881234'
    expect(phoneNumberToString(phoneNumber)).toBe('1588-1234')
  })

  it('phoneNumberToString', () => {
    const phoneNumber: string = '010-1234-1234'
    expect(phoneNumberToString(phoneNumber)).toBe('010-1234-1234')
  })

  it('numberWithCommas', () => {
    const number: number = 12341234
    expect(numberWithCommas(number)).toBe('12,341,234')
  })

  it('numberWithCommas', () => {
    const string: string = '12,341,234'
    expect(removeCommasFromNumber(string)).toBe(12341234)
  })
})