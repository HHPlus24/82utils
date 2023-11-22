export function pickRandomElement<T>(array: T[]): T | undefined {
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
