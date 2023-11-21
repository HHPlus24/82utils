export const snakeToCamel = (str: string): string => {
  return str.replace(/(_\w)/g, (matches) => matches[1].toUpperCase());
};
