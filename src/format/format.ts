export function phoneNumberToString(numberOnly: string) {
  const length = numberOnly.length;
  let result: string;

  if (length === 8) {
    result = numberOnly.replace(/(\d{4})(\d{4})/, '$1-$2');
  } else if (numberOnly.startsWith('02') && (length === 9 || length === 10)) {
    result = numberOnly.replace(/(\d{2})(\d{3,4})(\d{4})/, '$1-$2-$3');
  } else if (!numberOnly.startsWith('02') && (length === 10 || length === 11)) {
    result = numberOnly.replace(/(\d{3})(\d{3,4})(\d{4})/, '$1-$2-$3');
  } else {
    result = numberOnly;
  }

  return result;
}

export const numberWithCommas = (number: number): string => {
  return number.toLocaleString();
};

export const removeCommasFromNumber = (string: string): number => {
  return parseInt(string.replace(/,/g, ''));
};
