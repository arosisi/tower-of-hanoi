import { constants } from "./constants";

export const getRandInt = max => Math.floor(Math.random() * max);

export const get1ToN = n => {
  const result = [];
  for (let i = 1; i <= n; i++) {
    result.push(i);
  }
  return result;
};

export const getLast = array => array[array.length - 1];

export const getUpToSecondLast = array => array.slice(0, array.length - 1);

export const getMeasurements = size => {
  const { BASE_WIDTH, BASE_HEIGHT } = constants;
  const multiplier = size * 0.4 + 0.6;
  return [Math.ceil(BASE_WIDTH * multiplier), BASE_HEIGHT];
};
