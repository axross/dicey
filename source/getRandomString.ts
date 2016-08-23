const CHARACTORS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const getRandomString = (length: number, charactors: string = CHARACTORS): string => {
  if (!(Number.isSafeInteger(length) && length >= 1)) {
    throw new Error('length must be an Integer that is greater than or equal 1.');
  }

  if (!(typeof charactors === 'string' && charactors.length >= 2)) {
    throw new Error('charactors must be a String that length is greater than or equal 2.');
  }

  let result = '';

  for (let i = 0; i < length; ++i) {
    result += charactors[Math.floor(Math.random() * charactors.length)];
  }

  return result;
};

export default getRandomString;
