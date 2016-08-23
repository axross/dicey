const getRandomInteger = (
  minimum: number = Number.MIN_SAFE_INTEGER,
  maximum: number = Number.MAX_SAFE_INTEGER,
): number => {
  if (!(Number.isSafeInteger(minimum))) {
    throw new Error('minimum must be a Safe Integer.');
  }

  if (!(Number.isSafeInteger(maximum))) {
    throw new Error('maximum must be a Safe Integer.');
  }

  if (!(minimum < maximum)) {
    throw new Error('maximum must be greater than minimum.');
  }

  return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
};

export default getRandomInteger;
