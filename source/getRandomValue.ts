/* tslint:disable:no-any */
const getRandomValue = (...values: any[]) => values[Math.floor(Math.random() * values.length)];

export default getRandomValue;
