import { busyWait, jitterBusyWait, jitterSleep, wait } from './etc.js';

describe('etc test', () => {
  it('test busyWait functionality', async () => {
    const startTime = Date.now();

    // busyWait 함수가 3초 동안 동작하도록 호출
    await busyWait(3);

    const endTime = Date.now();
    const elapsedTime = endTime - startTime;

    // 기대한 대로 함수가 동작하는지 확인
    expect(elapsedTime).toBeGreaterThanOrEqual(3000);
  });

  it('should not runs shorter than the specified time', async () => {
    const startTime = Date.now();

    await busyWait(1);

    const endTime = Date.now();
    const elapsedTime = endTime - startTime;

    expect(elapsedTime).toBeLessThan(2000);
  });

  it('should throw an error if the amplitude is not between 0 and 1', async () => {
    expect(() => jitterBusyWait(1000, -1)).toThrow();
    expect(() => jitterBusyWait(1000, 2)).toThrow();
  });

  it('should wait for the specified time.', async () => {
    const startTime = Date.now();

    await jitterBusyWait(1000);

    const endTime = Date.now();
    const elapsedTime = endTime - startTime;

    expect(elapsedTime).toBeGreaterThanOrEqual(600);
    expect(elapsedTime).toBeLessThan(1400);
  });

  it('sholud not wait for the specified time', async () => {
    const startTime = Date.now();

    await jitterBusyWait(1000);

    const endTime = Date.now();
    const elapsedTime = endTime - startTime;

    expect(elapsedTime).toBeLessThan(2000);
  });

  it('should throw an error if the amplitude is not between 0 and 1', async () => {
    expect(() => jitterSleep(1000, -1)).rejects.toThrow();
    expect(() => jitterSleep(1000, 2)).rejects.toThrow();
  });

  it('should wait for sleep for approximately any time specified.', async () => {
    const startTime = Date.now();
    const sleepTime = 1000;

    await jitterSleep(sleepTime);

    const endTime = Date.now();
    const elapsedTime = endTime - startTime;

    expect(elapsedTime).toBeGreaterThanOrEqual(600);
    expect(elapsedTime).toBeLessThan(1400);
  });

  it('should not wait for sleep for a specified time.', async () => {
    const startTime = Date.now();
    const sleepTime = 1000;

    await jitterSleep(sleepTime);

    const endTime = Date.now();
    const elapsedTime = endTime - startTime;

    expect(elapsedTime).toBeLessThan(2000);
  });

  it('should Wait asynchronous for the specified number of seconds.', async () => {
    const startTime = Date.now();
    const waitTime = 1;

    await wait(waitTime);

    const endTime = Date.now();
    const elapsedTime = endTime - startTime;

    expect(elapsedTime).toBeGreaterThanOrEqual(waitTime * 1000);
  });

  it('should not Wait asynchronous for the specified number of seconds.', async () => {
    const startTime = Date.now();
    const waitTime = 1;

    await wait(waitTime);

    const endTime = Date.now();
    const elapsedTime = endTime - startTime;

    expect(elapsedTime).toBeLessThan(waitTime * 1000 + 100);
  });
});
