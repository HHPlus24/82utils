import { isValidBusinessNum } from './isValidBusinessNum';

describe('isValidBusinessNum', () => {
  it('should return false if the number is not a business number', () => {
    expect(isValidBusinessNum('123')).toBe(false);
  });

  it('should return true if the number is a business number', () => {
    const businessNum = '220-81-62517'; // 네이버
    expect(isValidBusinessNum(businessNum)).toBe(true);
  });

  it('should return true if the number is a business number', () => {
    const businessNum = '120-81-47521'; // 카카오
    expect(isValidBusinessNum(businessNum)).toBe(true);
  });

  it('should return true if the number is a business number', () => {
    const businessNum = '124-81-00998'; // 삼성전자
    expect(isValidBusinessNum(businessNum)).toBe(true);
  });

  it('should return true if the number is a business number', () => {
    const businessNum = '120-87-65763'; // 우아한 형제들
    expect(isValidBusinessNum(businessNum)).toBe(true);
  });

  it('should return true if the number is a business number', () => {
    const businessNum = '783-86-01715'; // 팀스파르타
    expect(isValidBusinessNum(businessNum)).toBe(true);
  });
});
