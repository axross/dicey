import * as assert from 'assert';

const getRandomInteger = (
  minimum: number = Number.MIN_SAFE_INTEGER,
  maximum: number = Number.MAX_SAFE_INTEGER,
): number => {
  assert(
    Number.isSafeInteger(minimum),
    'minimum must be an Safe Integer.'
  );
  assert(
    Number.isSafeInteger(maximum),
    'maximum must be an Safe Integer.'
  );
  assert(
    minimum < maximum,
    'maximum must be greater than minimum.'
  );

  return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
};

export default getRandomInteger;
