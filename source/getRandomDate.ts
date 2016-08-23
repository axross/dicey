import getRandomInteger from './getRandomInteger';

const getRandomDate = (minimum: Date = new Date(0), maximum: Date = new Date(Math.pow(2, 53) - 1)): Date => {
  if (!(minimum instanceof Date && !Number.isNaN(minimum.valueOf()))) {
    throw new Error('minimum must be a valid Date.');
  }

  if (!(maximum instanceof Date && !Number.isNaN(maximum.valueOf()))) {
    throw new Error('maximum must be a valid Date.');
  }

  if (!(minimum.valueOf() < maximum.valueOf())) {
    throw new Error('minimum must be before than maximum.');
  }

  return new Date(getRandomInteger(minimum.valueOf(), maximum.valueOf()));
};

export default getRandomDate;
