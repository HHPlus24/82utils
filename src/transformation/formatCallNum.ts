export const formatCallNum = (phone: string): string => {
  const length = phone.length;
  let result: string;

  if (length === 8) {
    result = phone.replace(/(\d{4})(\d{4})/, '$1-$2');
  } else if (phone.startsWith('02') && (length === 9 || length === 10)) {
    result = phone.replace(/(\d{2})(\d{3,4})(\d{4})/, '$1-$2-$3');
  } else if (!phone.startsWith('02') && (length === 10 || length === 11)) {
    result = phone.replace(/(\d{3})(\d{3,4})(\d{4})/, '$1-$2-$3');
  } else {
    result = phone;
  }

  return result;
};
