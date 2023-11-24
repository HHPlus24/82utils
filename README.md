# 82utils
## logo

<div align="center">
  <img src="https://velog.velcdn.com/images/eagle5424/post/da1c3c0f-95be-461e-9a0a-8bc5f600beaf/image.png" width="300" >
</div>

## OverView

82Utils is a library of utils functions.

The 82Utils package has created its own small but annoying features.

It's good for someone like this to use.

- When the team needs to use the same Utils library
- Small but necessary functions, but when you don't want to make them
- When you need a variety of validation functions
- When you need to make the regular expression you need
- When time/date related functions and various formats are needed
- when random functions are needed

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
- It is determined whether it is a business registration number.
```js
import validation from '82utils';

const businessNum = '220-81-62517';
isValidBusinessNum(businessNum)
```

### Date
- convert to KSTString
```js
  import date from '82utils';

  const date: Date = new Date('2023-11-24');
  toKSTString(date);
```

- Calculate how many days are left
```js
  import date from '82utils';

  const date = new Date('2023-11-30');
  const resultDate = new Date('2023-11-20');
  sub(date, { type: 'D', dec: 10});
```

### format
```js
  import format from '82utils';
  const phoneNumber: string = '01012344444';
  phoneNumberToString(phoneNumber);
```

## Contributin
Learn about contrigution [Contribution](./CONTRIBUTING.md)

Waiting for various people's contribution!!!

## Licence
[MIT](./LICENSE)

## Contact
eagle5424228@gmail.com
