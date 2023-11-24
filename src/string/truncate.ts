export interface TruncateOptions {
  length?: number;
  omission?: string;
}

export function truncate(str: string, options: TruncateOptions = {}): string {
  const { length = 30, omission = '...' } = options;
  if (str.length <= length) {
    return str;
  }
  return str.slice(0, length - omission.length) + omission;
}
