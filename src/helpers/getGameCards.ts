import { v4 as uuidv4 } from 'uuid';
import { ICard } from 'types/card';
import { shuffle } from './shuffle';
import { getPrimeNumbers } from './getPrimeNumbers';

export const getGameCards = (): ICard[] => {
  const primeNumbers = getPrimeNumbers(50);
  const duplicatedNumbers = [...primeNumbers, ...primeNumbers];
  const shuffledNumbers = shuffle(duplicatedNumbers);

  return shuffledNumbers.map((number) => ({
    id: uuidv4(),
    number,
    isGuessed: false,
  }));
};
