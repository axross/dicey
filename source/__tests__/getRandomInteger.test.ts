import test from 'ava';
import getRandomInteger from '../getRandomInteger';
import getWithoutInteger from '../getWithoutInteger';

test('() returns always an Integer at random.', t => {
  let [previous, previouss, previousss]: number[] = [NaN, NaN, NaN];

  for (let i = 0; i < 1000; ++i) {
    const current = getRandomInteger(0, 10000000);

    t.not(current, previous);

    [previous, previouss, previousss] = [current, previous, previouss];
  }
});

test('(minimum, maximum) throws an Error if minimum or maximum is not a Safe Integer.', t => {
  for (let i = 0; i < 100; ++i) {
    t.throws(() => getRandomInteger(getRandomInteger(), getWithoutInteger()));
  }

  for (let i = 0; i < 100; ++i) {
    t.throws(() => getRandomInteger(getWithoutInteger(), getRandomInteger()));
  }
});
