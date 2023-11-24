export const hmsToMs = (hms: string): number => {
  const [hours, minutes, seconds] = hms.split(':').map(Number);
  if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
    throw new Error('Invalid input');
  }

  return (hours * 3600 + minutes * 60 + seconds) * 1000;
};
