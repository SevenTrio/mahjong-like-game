const isPrime = (num: number): boolean => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

export const getPrimeNumbers = (max: number): number[] => {
  const array = [2];

  for (let i = 3; i < max; i += 2) {
    if (isPrime(i)) {
      array.push(i);
    }
  }

  return array;
};
