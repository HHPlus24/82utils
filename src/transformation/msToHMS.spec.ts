import { msToHMS } from './msToHMS.js';

describe('msToHMS', () => {
  it('should return 00:00:00 for 0', () => {
    expect(msToHMS(0)).toBe('00:00:00');
  });

  it('should return 00:00:01 for 1000', () => {
    expect(msToHMS(1000)).toBe('00:00:01');
  });

  it('should return 00:01:00 for 60000', () => {
    expect(msToHMS(60000)).toBe('00:01:00');
  });

  it('should return 01:00:00 for 3600000', () => {
    expect(msToHMS(3600000)).toBe('01:00:00');
  });
});

