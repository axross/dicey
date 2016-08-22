import * as assert from 'assert';

const CHARACTORS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const getRandomString = (length: number, charactors: string = CHARACTORS): string => {
  assert(
    Number.isSafeInteger(length) && length >= 1,
    '`length` must be an Integer that is 1 or above.'
  );
  assert(
    typeof charactors === 'string' && charactors.length >= 2,
    'charactors must be a String that length greater than 1.'
  );

  let result = '';

  for (let i = 0; i < length; ++i) {
    result += charactors[Math.floor(Math.random() * charactors.length)];
  }

  return result;
};

export default getRandomString;
