import { constants } from "./constants";

export const get1ToN = n => {
  const result = [];
  for (let i = 1; i <= n; i++) {
    result.push(i);
  }
  return result;
};

export const getLast = array => array[array.length - 1];

export const getUpToLast = array => array.slice(0, array.length - 1);

export const getMeasurements = size => {
  const { BASE_WIDTH, BASE_HEIGHT } = constants;
  const multiplier = size * 0.6 + 0.4;
  return [
    Math.ceil(BASE_WIDTH * multiplier),
    Math.ceil(BASE_HEIGHT * multiplier)
  ];
};
