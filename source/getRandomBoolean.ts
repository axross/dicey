import getRandomInteger from './getRandomInteger';

const VALUES = [true, false];

const getRandomBoolean = () => VALUES[getRandomInteger(0, 1)];

export default getRandomBoolean;
