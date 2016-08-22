import * as assert from 'assert';

const getRandomDouble = (
  minimum: number = Number.MIN_SAFE_INTEGER,
  maximum: number = Number.MAX_SAFE_INTEGER,
): number => {
  assert(
    typeof minimum === 'number' && Number.isFinite(minimum),
    'minimum must be an Finate Number.'
  );
  assert(
    typeof maximum === 'number' && Number.isFinite(maximum),
    'maximum must be an Finate Number.'
  );
  assert(
    minimum < maximum,
    'maximum must be greater than minimum.'
  );

  return Math.random() * (maximum - minimum) + minimum;
};

export default getRandomDouble;
