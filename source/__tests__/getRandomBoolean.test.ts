import test from 'ava';
import getRandomBoolean from '../getRandomBoolean';

test('() returns always a Boolean at random.', t => {
  const TRIALS = 10000;
  let TRUE_COUNT = 0;
  let FALSE_COUNT = 0;

  for (let i = 0; i < TRIALS; ++i) {
    if (getRandomBoolean() === true) {
      ++TRUE_COUNT;
    }

    if (getRandomBoolean() === false) {
      ++FALSE_COUNT;
    }
  }

  t.true(TRUE_COUNT - FALSE_COUNT < (TRIALS * 0.05));
});
