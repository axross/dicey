import test from 'ava';
import getRandomInteger from '../getRandomInteger';

const TRIALS = 1000000;
const AMPLITUDE_MAGNIFICATION = 0.005;

test('(minimum, maximum) returns an Integer at random with arguments. #1', t => {
  const MINIMUM = -50;
  const MAXIMUM = 50;
  const MEDIAN = (MAXIMUM - MINIMUM) / 2 + MINIMUM;
  const AMPLITUDE = (MAXIMUM - MINIMUM) / 2 * AMPLITUDE_MAGNIFICATION;
  let total = 0;

  for (let i = 0; i < TRIALS; ++i) {
    const result = getRandomInteger(MINIMUM, MAXIMUM);

    if (result < MINIMUM || result > MAXIMUM) {
      t.fail(`${result} is an invalid value for between ${MINIMUM} and ${MAXIMUM}`);
    }

    total += result;
  }

  t.true(total >= TRIALS * (MEDIAN - AMPLITUDE) && total <= TRIALS * (MEDIAN + AMPLITUDE));
});

test('(minimum, maximum) returns an Integer at random with arguments. #2', t => {
  const MINIMUM = 0;
  const MAXIMUM = 100;
  const MEDIAN = (MAXIMUM - MINIMUM) / 2 + MINIMUM;
  const AMPLITUDE = (MAXIMUM - MINIMUM) / 2 * AMPLITUDE_MAGNIFICATION;
  let total = 0;

  for (let i = 0; i < TRIALS; ++i) {
    const result = getRandomInteger(MINIMUM, MAXIMUM);

    if (result < MINIMUM || result > MAXIMUM) {
      t.fail(`${result} is an invalid value for between ${MINIMUM} and ${MAXIMUM}`);
    }

    total += result;
  }

  t.true(total >= TRIALS * (MEDIAN - AMPLITUDE) && total <= TRIALS * (MEDIAN + AMPLITUDE));
});

test('(minimum, maximum) returns an Integer at random with arguments. #3', t => {
  const MINIMUM = -100;
  const MAXIMUM = -50;
  const MEDIAN = (MAXIMUM - MINIMUM) / 2 + MINIMUM;
  const AMPLITUDE = (MAXIMUM - MINIMUM) / 2 * AMPLITUDE_MAGNIFICATION;
  let total = 0;

  for (let i = 0; i < TRIALS; ++i) {
    const result = getRandomInteger(MINIMUM, MAXIMUM);

    if (result < MINIMUM || result > MAXIMUM) {
      t.fail(`${result} is an invalid value for between ${MINIMUM} and ${MAXIMUM}`);
    }

    total += result;
  }

  t.true(total >= TRIALS * (MEDIAN - AMPLITUDE) && total <= TRIALS * (MEDIAN + AMPLITUDE));
});
