import React from "react";
import Button from "@material-ui/core/Button";

import Disk from "./Disk";
import { get1ToN, getLast, getUpToLast, getMeasurements } from "../helpers";
import { constants } from "../constants";

const { DISK_COLORS } = constants;

class Controller extends React.Component {
  state = {
    col1: get1ToN(this.props.numDisks).reverse(),
    col2: [],
    col3: []
  };

  getIsActive = size => {
    const { col1, col2, col3 } = this.state;
    return (
      getLast(col1) === size || getLast(col2) === size || getLast(col3) === size
    );
  };

  getPosition = (col1, col2, col3, size) => {
    const width = window.innerWidth / 6;
    const diskWidth = getMeasurements(size)[0];
    if (col1.includes(size)) {
      const x = width - diskWidth / 2;
      const y = this.getY(col1, size);
      return [x, y];
    }

    if (col2.includes(size)) {
      const x = width * 3 - diskWidth / 2;
      const y = this.getY(col2, size);
      return [x, y];
    }

    const x = width * 5 - diskWidth / 2;
    const y = this.getY(col3, size);
    return [x, y];
  };

  getY = (col, size) => {
    const height = window.innerHeight - 150;
    const diskHeight = getMeasurements(size)[1];
    let y = height - diskHeight;
    let i = 0;
    while (col[i] !== size) {
      y -= getMeasurements(col[i])[1];
      i++;
    }
    return y;
  };

  move = (colNum, size) => {
    const { col1, col2, col3 } = this.state;
    // prettier-ignore
    const fromCol = col1.includes(size) ? col1 : col2.includes(size) ? col2 : col3;
    const toCol = colNum === 1 ? col1 : colNum === 2 ? col2 : col3;

    if (fromCol === toCol || size > getLast(toCol)) {
      return this.getPosition(col1, col2, col3, size);
    }

    const newFromCol = getUpToLast(fromCol);
    const newToCol = [...toCol, size];

    // prettier-ignore
    const newCol1 = col1 === fromCol ? newFromCol : col1 === toCol ? newToCol : col1
    // prettier-ignore
    const newCol2 = col2 === fromCol ? newFromCol : col2 === toCol ? newToCol : col2
    // prettier-ignore
    const newCol3 = col3 === fromCol ? newFromCol : col3 === toCol ? newToCol : col3

    this.setState({ col1: newCol1, col2: newCol2, col3: newCol3 });
    return this.getPosition(newCol1, newCol2, newCol3, size);
  };

  render() {
    const { numDisks, divWidth, restart } = this.props;
    const { col1, col2, col3 } = this.state;
    return (
      <div>
        <div
          style={{
            position: "absolute",
            top: 30,
            left: 0,
            right: 0
          }}
        >
          <Button color='secondary' onClick={restart}>
            Restart
          </Button>
        </div>

        {get1ToN(numDisks).map(size => (
          <Disk
            key={size}
            active={this.getIsActive(size)}
            xy={this.getPosition(col1, col2, col3, size)}
            move={this.move}
            size={size}
            color={DISK_COLORS[size - 1]}
            divWidth={divWidth}
          />
        ))}
      </div>
    );
  }
}

export default Controller;
