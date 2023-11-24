export function padStart(str: string, length: number, pad: string = ' '): string {
  return str.padStart(length, pad);
}

export function padEnd(str: string, length: number, pad: string = ' '): string {
  return str.padEnd(length, pad);
}
