import RegexBuilder from './regex.js';

describe('regexBuilder', () => {
  let regexBuilder: RegexBuilder;

  beforeEach(() => {
    // 각 테스트 스위트 전에 한 번만 실행되는 코드
    regexBuilder = new RegexBuilder();
  });

  it('should match a valid number pattern', () => {
    regexBuilder.add({ type: 'number', count: 2 });

    const testString = '12';
    const result = regexBuilder.test(testString);
    expect(result).toBeTruthy();
  });

  it('should match a valid  Korean pattern', () => {
    regexBuilder.add({ type: 'language', count: 5, lang: 'ko' });

    const testString = '안녕하세요';
    const result = regexBuilder.test(testString);
    expect(result).toBeTruthy();
  });

  it('should match a valid English pattern', () => {
    regexBuilder.add({ type: 'language', count: 3, lang: 'en' });

    const testString = 'Hello';
    const result = regexBuilder.test(testString);

    expect(result).toBeTruthy;
  });

  it('should match a valid number and Korean pattern', () => {
    regexBuilder.add({ type: 'number', count: 3 }).add({ type: 'language', count: 2, lang: 'ko' });

    const testString = '12안녕하세요';
    const result = regexBuilder.test(testString);

    expect(result).toBeTruthy;
  });

  it('should match a valid korean and english pattern', () => {
    regexBuilder
      .add({ type: 'language', count: 3, lang: 'ko' })
      .add({ type: 'language', count: 2, lang: 'en' });

    const testString = '안녕하세요 Hello';
    const result = regexBuilder.test(testString);

    expect(result).toBeTruthy;
  });

  it('should match a valid English and number pattern', () => {
    regexBuilder.add({ type: 'language', count: 3, lang: 'en' }).add({ type: 'number', count: 2 });

    const testString = 'Hello12';
    const result = regexBuilder.test(testString);

    expect(result).toBeTruthy;
  });

  it('should not use non-exist types', () => {
    regexBuilder.add({ type: 'unknown' as any, count: 2 });

    const testString = '12';
    const result = regexBuilder.test(testString);

    expect(result).toBeFalsy;
  });

  it('should not use negative number', () => {
    regexBuilder.add({ type: 'number', count: -2 });

    const testString = '12';
    const result = regexBuilder.test(testString);

    expect(result).toBeFalsy;
  });

  it('should not omit a language from language type', () => {
    regexBuilder.add({ type: 'language', count: 2 });

    const testString = '안녕하세요';
    const result = regexBuilder.test(testString);

    expect(result).toBeFalsy;
  });
});
