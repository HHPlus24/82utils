export function pick<T extends object, K extends keyof T>(
  object: T,
  keys: K[]
): Pick<T, K> {
  const picked = {} as Pick<T, K>;
  for (const key of keys) {
    picked[key] = object[key];
  }
  return picked;
}
