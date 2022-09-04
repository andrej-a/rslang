export const generateRandomPage = (min: number, max: number) => {
  const page = Math.floor(min + Math.random() * (max + 1 - min));
  return page;
};
