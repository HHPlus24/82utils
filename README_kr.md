# 82utils
---

## logo
<div align="center">
  <img src="https://velog.velcdn.com/images/eagle5424/post/da1c3c0f-95be-461e-9a0a-8bc5f600beaf/image.png" width="300" >
</div>

## 개요

82Utils는 utils 함수들을 만들어서 모아놓은 라이브러리 입니다.

82Utils 패키지는 사소하지만 귀찮은 기능들을 직접 만들어 놓았습니다.

이런 분이 사용하면 좋습니다.

- 팀에서 동일한 Utils 라이브러리를 사용할 필요성이 있을떄
- 사소하지만 필요한 함수들이지만 만들기 귀찮을때
- 다양한 validation 기능이 필요할때
- 필요한 정규표현식을 만들어야 할때
- 시간 / 날짜 관련 함수들과 다양한 Format이 필요 할때
---

## Feature List
- [Array](src/array/array.md)
- [DATE / TIME](src/date/dateTime.md)
- [String](src/string//string.md)
- [ValidationTool](src/validation/validation.md)
- [Regex Builder](src/regex/regexBuilder.md)
- [Format](src/format/format.md)
- [Transformation](src/transformation/unitTramsformation.md)
- [ETC](src/etc/etc.md)
---

## Installation
```js
npm install 82utils
```

## Useage

### Validation
- 사업자 등록 번호가 정확한 규격인지 판단 
```js
import validation from '82utils';

const businessNum = '220-81-62517';
isValidBusinessNum(businessNum)
```

### Date
- 한국시간으로 변경
```js
  import date from '82utils';

  const date: Date = new Date('2023-11-24');
  toKSTString(date);
```

- 날짜와 날짜의 차이를 구합니다.
```js
  import date from '82utils';

  const date = new Date('2023-11-30');
  const resultDate = new Date('2023-11-20');
  sub(date, { type: 'D', dec: 10});
```

### format
- 핸드폰 번호를 일정한 규격에 맞게 만들어 줍니다.
```js
  import format from '82utils';
  const phoneNumber: string = '01012344444';
  phoneNumberToString(phoneNumber);
```
## mileStone
[releaseNote](./mileston.md)
버전별로 앞으로 추가될 기능 입니다.

## Contributin
컨트리뷰트 하는 방법 입니다. [Contribution](./CONTRIBUTING.md)

다양한 사람들의 기여를 기다리고 있습니다.

## Licence
[MIT](./LICENSE)

## Contact
eagle5424228@gmail.com

