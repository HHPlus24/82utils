## 82Utils / validation

타당성 판단을 위한 기능입니다.
- 사업자등록 번호 (isValidBusinessNum)
- 올바른 핸드폰 번호인지 (isValidCellPhone)
- 이메일 검증(isValidEmail)
- 지역번호 판단 (isValidLandline)

## Eample
```js
import validation from '82Utils';

isValidLandline('031-123-4567')
```