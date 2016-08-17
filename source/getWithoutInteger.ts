/* tslint:disable:no-any */
import getRandomBoolean from './getRandomBoolean';
import getRandomDate from './getRandomDate';
import getRandomDouble from './getRandomDouble';
import getRandomString from './getRandomString';

const WITHOUT_INTEGER: Function[] = [
  getRandomBoolean,
  getRandomDate,
  getRandomDouble,
  getRandomString,
  () => null,
];

const getWithoutInteger = (): any => {
  return WITHOUT_INTEGER[Math.floor(Math.random() * WITHOUT_INTEGER.length)]();
};

export default getWithoutInteger;
