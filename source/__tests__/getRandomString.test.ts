import test from 'ava';
import getRandomInteger from '../getRandomInteger';
import getRandomString from '../getRandomString';
import getWithoutInteger from '../getWithoutInteger';

test('() returns always a String at random.', t => {
  let [previous, previouss, previousss]: string[] = ['', '', ''];

  for (let i = 0; i < 1000; ++i) {
    const current = getRandomString();

    t.not(current, previous);

    [previous, previouss, previousss] = [current, previous, previouss];
  }
});

test('(length) returns a String as specified.', t => {
  for (let i = 0; i < 100; ++i) {
    const length = getRandomInteger(1, 1000);

    t.is(getRandomString(length).length, length);
  }
});

test('(length) throws an Error if length is not a Safe Integer.', t => {
  for (let i = 0; i < 100; ++i) {
    t.throws(() => getRandomString(getWithoutInteger()));
  }
});

test('(length) throws an Error if length is 0.', t => {
  t.throws(() => getRandomString(0));
});

test('(length) throws an Error if length is less than 0.', t => {
  for (let i = 0; i < 100; ++i) {
    t.throws(() => getRandomString(getRandomInteger(-1000, -1)));
  }
});
