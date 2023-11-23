export const HMSToMs = (HMS: string): number => {
  const [hours, minutes, seconds] = HMS.split(':').map(Number);
  if (isNaN(hours) || isNaN(minutes) || isNaN(seconds))
    throw new Error('Invalid input');

  return (hours * 3600 + minutes * 60 + seconds) * 1000;
};
