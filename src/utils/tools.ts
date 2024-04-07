export const range = (a: number, b: number) => {
  return Array.from({ length: b - a }, (_, index) => index + a);
};
