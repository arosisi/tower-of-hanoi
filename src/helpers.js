import { constants } from "./constants";

export const getLast = array => array[array.length - 1];

export const getMeasurements = size => {
  const { BASE_WIDTH, BASE_HEIGHT } = constants;
  const multiplier = size * 0.6 + 0.4;
  return [
    Math.ceil(BASE_WIDTH * multiplier),
    Math.ceil(BASE_HEIGHT * multiplier)
  ];
};
