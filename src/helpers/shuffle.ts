export const shuffle = <T>(array: Array<T>): Array<T> => {
  const copiedArray = [...array];

  return copiedArray.sort(() => Math.random() - 0.5);
};
