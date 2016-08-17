import * as assert from 'assert';
import getRandomInteger from './getRandomInteger';

const CHARACTORS = 'abcdefghijklmnopqrstuvwxyz0123456789';

const getRandomString = (length: number = 32): string => {
  assert(
    Number.isSafeInteger(length) && length >= 1,
    '`length` must be an Integer that is 1 or above.'
  );

  let result = '';

  for (let i = 0; i < length; ++i) {
    result += CHARACTORS[getRandomInteger(0, CHARACTORS.length - 1)];
  }

  return result;
};

export default getRandomString;
