import test from 'ava';
import getRandomInteger from '../getRandomInteger';
import getRandomString from '../getRandomString';

test('(length, charactors) returns a String at random.', t => {
  const CHARACTORS = [
    '0123456789ABCDEF',
    'github',
    'UmEbOsHi',
  ];

  for (const charactors of CHARACTORS) {
    for (let i = 0; i < 10000; ++i) {
      const length = getRandomInteger(1, 100);
      const result = getRandomString(length, charactors);

      t.is(result.length, length);

      for (let j = 0; j < length; ++j) {
        if (charactors.indexOf(result[j]) === -1) {
          t.fail(`${result[j]} is not included in ${charactors}`);
        }
      }
    }
  }
});

test('(length) returns a String at random with default charactors.', t => {
  const EXPECTED_CHARACTORS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < 10000; ++i) {
    const result = getRandomString(100);

    for (let j = 0; j < 100; ++j) {
      if (EXPECTED_CHARACTORS.indexOf(result[j]) === -1) {
        t.fail(`${result[j]} is not included in ${EXPECTED_CHARACTORS}`);
      }
    }
  }
});
