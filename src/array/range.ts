export function range(start: number, end?: number, step: number = 1): number[] {
  if (end === undefined) {
    end = start;
    start = 0;
  }
  const length = Math.ceil((end - start) / step);
  return Array.from({ length }, (x, index) => start + index * step);
}
