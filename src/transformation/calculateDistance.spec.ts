import { calculateDistance } from './calculateDistance.js';

describe('calculateDistance', () => {
  it('should return 0 when the same point is given', () => {
    const pt1 = { latitude: 0, longitude: 0 };
    const pt2 = { latitude: 0, longitude: 0 };
    const distance = calculateDistance(pt1, pt2);
    expect(distance).toBe(0);
  });

  it('should calculate the distance between two points', () => {
    const pt1 = { latitude: 37.5758772, longitude: 126.9768121 }; // 광화문
    const pt2 = { latitude: 37.5298837, longitude: 126.9648019 }; // 용산역
    const distance = calculateDistance(pt1, pt2);
    expect(distance).toBeCloseTo(5.22, 1);  // 5.22km
  });

  it('should calculate the distance between two points', () => {
    const pt1 = { latitude: 37.5666612, longitude: 126.9783785 }; // 서울시청
    const pt2 = { latitude: 35.179665, longitude: 129.0747635 }; // 용산역
    const distance = calculateDistance(pt1, pt2);
    expect(distance).toBeCloseTo(325.04, 1);  // 325.04km
  });
});
