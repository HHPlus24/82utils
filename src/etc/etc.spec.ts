import { busyWait, jitterBusyWait } from './etc';

describe("busyWait test", () => {
  it('test busyWait functionality', async () => {
    const startTime = Date.now();
  
    // busyWait 함수가 3초 동안 동작하도록 호출
    await busyWait(3);
  
    const endTime = Date.now();
    const elapsedTime = endTime - startTime;
  
    // 기대한 대로 함수가 동작하는지 확인
    expect(elapsedTime).toBeGreaterThanOrEqual(3000);
  });

  it("should not runs shorter than the specified time", async () => {
    const startTime = Date.now();

    await busyWait(1);

    const endTime = Date.now();
    const elapsedTime = endTime - startTime;

    expect(elapsedTime).toBeLessThan(2000);
  })
});

describe("jitterBusyWait test", () => {
  it('should wait for the specified time.', async () => {
    const startTime = Date.now();

    await jitterBusyWait(1000);

    const endTime = Date.now();
    const elapsedTime = endTime - startTime;

    expect(elapsedTime).toBeGreaterThanOrEqual(1000);
  })

  it('sholud not wait for the specified time', async () => {
    const startTime = Date.now();

    await jitterBusyWait(1000);

    const endTime = Date.now();
    const elapsedTime = endTime - startTime;

    expect(elapsedTime).toBeLessThan(2000);
  })
})