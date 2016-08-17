import * as assert from 'assert';

const getRandomDouble = (minimum: number = -100, maximum: number = 100): number => {
  assert(
    typeof minimum === 'number' && Number.isFinite(minimum),
    '`minimum` must be an Finate Number.'
  );
  assert(
    typeof maximum === 'number' && Number.isFinite(maximum),
    '`maximum` must be an Finate Number.'
  );

  return Math.random() * (maximum - minimum) + minimum;
};

export default getRandomDouble;
