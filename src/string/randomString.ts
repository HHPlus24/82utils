import cryptoRandomString from 'crypto-random-string';

export interface RandomStringOptions {
  type?:
    | 'hex'
    | 'base64'
    | 'url-safe'
    | 'numeric'
    | 'distinguishable'
    | 'ascii-printable'
    | 'alphanumeric';
  characters?: string;
}

export function randomString(length: number, options?: RandomStringOptions) {
  return cryptoRandomString({ length });
}
