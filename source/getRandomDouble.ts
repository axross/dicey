const getRandomDouble = (
  minimum: number = Number.MIN_SAFE_INTEGER,
  maximum: number = Number.MAX_SAFE_INTEGER,
): number => {
  if (!(typeof minimum === 'number' && Number.isFinite(minimum))) {
    throw new Error('minimum must be an Finate Number.');
  }

  if (!(typeof maximum === 'number' && Number.isFinite(maximum))) {
    throw new Error('maximum must be an Finate Number.');
  }

  if (!(minimum < maximum)) {
    throw new Error('maximum must be greater than minimum.');
  }

  return Math.random() * (maximum - minimum) + minimum;
};

export default getRandomDouble;
