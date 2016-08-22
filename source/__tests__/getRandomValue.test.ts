import test from 'ava';
import getRandomValue from '../getRandomValue';

const TRIALS = 1000000;
const AMPLITUDE_MAGNIFICATION = 0.075;

test('() returns a Boolean at random.', t => {
  const CHOICES = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  const MEDIAN = CHOICES.length / 2 * TRIALS;
  const results = new Map();

  for (let i = 0; i < TRIALS; ++i) {
    const result = getRandomValue(...CHOICES);

    if (results.has(result)) {
      results.set(result, results.get(result) + 1);
    } else {
      results.set(result, 1);
    }
  }

  let total = 0;

  for (const [choice, count] of results.entries()) {
    total += (CHOICES.indexOf(choice) + 1) * count;
  }

  t.true(total >= MEDIAN * (1 - AMPLITUDE_MAGNIFICATION) && total <= MEDIAN * (1 + AMPLITUDE_MAGNIFICATION));
});
