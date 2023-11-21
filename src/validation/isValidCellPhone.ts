export function isValidCellPhone(num: string): boolean {
  const regex = /^(010|8210)-?[2-9]{1}[0-9]{3}-?\d{4}$/;
  if (!regex.test(num)) {
    return false;
  }
  return true;
}