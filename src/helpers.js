import { constants } from "./constants";

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

export const solve = (numDisks, initCol1, initCol2, initCol3) => {
  let col1 = [...initCol1];
  let col2 = [...initCol2];
  let col3 = [...initCol3];

  let steps = "";

  const moveDisk = (fromCol, toCol, size) => {
    if (fromCol === col1) {
      col1.pop();
    } else if (fromCol === col2) {
      col2.pop();
    } else {
      col3.pop();
    }

    if (toCol === col1) {
      col1.push(size);
    } else if (toCol === col2) {
      col2.push(size);
    } else {
      col3.push(size);
    }
  };

  // algorithm from
  // https://stackoverflow.com/questions/49220476/tower-of-hanoi-solving-halfway-algorithm-in-python
  const moveDisks = async (maxSize, toCol) => {
    let fromCol;
    let size = maxSize;
    while (size >= 1) {
      if (col1 !== toCol && col1.includes(size)) {
        fromCol = col1;
        break;
      }
      if (col2 !== toCol && col2.includes(size)) {
        fromCol = col2;
        break;
      }
      if (col3 !== toCol && col3.includes(size)) {
        fromCol = col3;
        break;
      }
      size--;
    }

    // all disks are already in the to-column
    if (size === 0) {
      return;
    }

    const otherCol =
      col1 !== fromCol && col1 !== toCol
        ? col1
        : col2 !== fromCol && col2 !== toCol
        ? col2
        : col3;

    moveDisks(size - 1, otherCol);

    moveDisk(fromCol, toCol, size);
    steps += `${JSON.stringify({ col1, col2, col3 })},`;

    moveDisks(size - 1, toCol);
  };

  moveDisks(numDisks, col2);

  return `[${steps.slice(0, -1)}]`;
};
