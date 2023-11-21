import { degreeToRadian } from './degreeToRadian';

describe('degreeToRadian', () => {
  it('should convert 0 degrees to 0 radians', () => {
    expect(degreeToRadian(0)).toBe(0);
  })

  it('should convert 90 degrees to PI/2 radians', () => {
    expect(degreeToRadian(90)).toBe(Math.PI / 2);
  });

  it('should convert 180 degrees to PI radians', () => {
    expect(degreeToRadian(180)).toBe(Math.PI);
  });

  it('should convert 270 degrees to 3PI/2 radians', () => {
    expect(degreeToRadian(270)).toBe((3 * Math.PI) / 2);
  });

  it('should convert 360 degrees to 2PI radians', () => {
    expect(degreeToRadian(360)).toBe(2 * Math.PI);
  });
});