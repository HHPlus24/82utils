/**
 * Busy wait for a specified number of seconds.
 *
 * @param sec The number of seconds to wait.
 */
export const busyWait = (sec: number): void => {
  let start = Date.now(),
    now = start;
  while (now - start < sec * 1000) {
    now = Date.now();
  }
};

/**
 * Asynchronous wait for a specified number of seconds.
 *
 * @param sec The number of seconds to wait.
 */
export const wait = (sec: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, sec * 1000));
};

/**
 * Busy wait for a random period of time around a specified duration, with a jitter factor.
 *
 * @param milliseconds The target wait duration in milliseconds.
 * @param amplitude - 0 < amplitude < 1
 * @throws {Error} If the amplitude is not between 0 and 1.
 */
export const jitterBusyWait = (
  milliseconds: number,
  amplitude: number = 0.3
): void => {
  if (amplitude < 0 || amplitude > 1) {
    throw new Error('Amplitude must be between 0 and 1');
  }

  const minJitter = 1 - amplitude;
  const maxJitter = 1 + amplitude;

  const jitterRange = milliseconds * (maxJitter - minJitter);
  const jitterSec =
    milliseconds + Math.random() * jitterRange - jitterRange / 2;

  let start = Date.now(),
    now = start;
  while (now - start < jitterSec) {
    now = Date.now();
  }
};

/**
 * Sleeps for a random amount of time around a specified duration, with a jitter factor.
 *
 * @param milliseconds The target sleep duration in milliseconds.
 * @param amplitude - 0 < amplitude < 1
 * @throws {Error} If the amplitude is not between 0 and 1.
 * @return
 */
export const jitterSleep = async (
  milliseconds: number,
  amplitude: number = 0.3
): Promise<void> => {
  if (amplitude < 0 || amplitude > 1) {
    throw new Error('Amplitude must be between 0 and 1');
  }

  const minJitter = 1 - amplitude;
  const maxJitter = 1 + amplitude;

  const jitterRange = milliseconds * (maxJitter - minJitter);
  const jitter = milliseconds + Math.random() * jitterRange - jitterRange / 2;

  return new Promise((resolve) => setTimeout(resolve, jitter));
};

