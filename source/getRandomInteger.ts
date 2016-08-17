import * as assert from 'assert';

const getRandomInteger = (minimum: number = 0, maximum: number = 100): number => {
  assert(
    Number.isSafeInteger(minimum),
    '`minimum` must be an Safe Integer.'
  );
  assert(
    Number.isSafeInteger(maximum),
    '`maximum` must be an Safe Integer.'
  );

  return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
};

export default getRandomInteger;
