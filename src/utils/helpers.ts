export const trunc = (str: string, length: number = 40) => {
  if (length <= 0) return str;

  if (str.length > length) {
    return str.slice(0, length) + '...';
  }
  return str;
};
