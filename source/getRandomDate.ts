import * as assert from 'assert';
import getRandomInteger from './getRandomInteger';

const getRandomDate = (minimum: Date = new Date(0), maximum: Date = new Date(Math.pow(2, 53) - 1)): Date => {
  assert(
    minimum instanceof Date && !Number.isNaN(minimum.valueOf()),
    '`minimum` must be a Valid Date'
  );
  assert(
    maximum instanceof Date && !Number.isNaN(maximum.valueOf()),
    '`maximum` must be a Valid Date'
  );

  return new Date(getRandomInteger(minimum.valueOf(), maximum.valueOf()));
};

export default getRandomDate;
