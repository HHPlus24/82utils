export function omit<T extends object, K extends keyof T>(object: T, keys: K[]): Omit<T, K> {
  const omitted = { ...object };
  keys.forEach((key) => delete omitted[key]);
  return omitted;
}
