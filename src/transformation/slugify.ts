export const slugify = (text: string, separator = '-'): string => {
  return text
    .trim()
    .toLowerCase()
    .replace(/^-+|-+$/g, '') // Remove leading and trailing dashes
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/_/g, separator) // Replace _ with -
    .replace(/s+/g, separator) // Replace spaces with dashes
    .replace(/--+/g, separator); // Replace multiple - with single -
};
