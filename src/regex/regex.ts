interface IRegexAdd {
  type: 'number' | 'language';
  count: number;
  lang?: 'ko' | 'en';
}

class RegexBuilder {
  private _regex: string = '';

  setRegex(regex: string): void {
    this._regex = regex;
  }

  add({ type, count, lang }: IRegexAdd): RegexBuilder {
    if (type === 'number') {
      this._regex += `[0-9]{${count}}`;
    } else if (type === 'language') {
      if (lang === 'ko') {
        this._regex += `[가-힣]{${count}}`;
      } else if (lang === 'en') {
        this._regex += `[A-Za-z]{${count}}`;
      }
    }

    return this;
  }

  test(sampleString: string): boolean {
    const regex = new RegExp(this._regex);
    return regex.test(sampleString);
  }
}

export default RegexBuilder;
