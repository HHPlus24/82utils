export const capitalize = (str: string): string => {
  const arr = str.trim().toLowerCase().split(' ');
  const capitalizedArr = arr.map(
    (word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`
  );
  return capitalizedArr.join(' ');
};
