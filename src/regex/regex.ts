interface IRegexAdd {
  type: 'number' | 'language';
  count: number;
  lang? : 'ko' | 'en' 
}

class RegexBuilder {
  private regex : string = '';

  setRegex(regex: string): void {
    this.regex = regex;
  }

  add({type, count, lang}: IRegexAdd): RegexBuilder {
    if (type === 'number') {
      this.regex += `[0-9]{${count}}`
    } else if (type === 'language') {
      if (lang === 'ko') {
        this.regex += `[가-힣]{${count}}`;
      } else if (lang === 'en') {
        this.regex += `[A-Za-z]{${count}}`;
      }
    }
    
    return this;
  }

  test(sampleString: string): boolean {
    const regex = new RegExp(this.regex);
    return regex.test(sampleString);
  }
}

export default RegexBuilder;
