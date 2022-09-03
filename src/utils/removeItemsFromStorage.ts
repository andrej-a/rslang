export const removeItemsFromStorage = (...arg: string[]) => {
  arg.forEach((item) => {
    localStorage.removeItem(item);
  });
};
