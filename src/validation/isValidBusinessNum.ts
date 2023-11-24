export const isValidBusinessNum = (businessNum: string): boolean => {
  const regex = /^\d{3}-\d{2}-\d{5}$/;
  if (!regex.test(businessNum)) {
    return false;
  }

  const digits = businessNum.replace(/-/g, '').split('').map(Number);
  const weights = [1, 3, 7, 1, 3, 7, 1, 3, 5]; // 인증키

  let sum = digits.slice(0, 9).reduce((acc, digit, index) => {
    return acc + digit * weights[index];
  }, 0);

  sum += Math.floor((digits[8] * 5) / 10);

  const checkSum = 10 - (sum % 10);

  return checkSum === digits[9];
};
