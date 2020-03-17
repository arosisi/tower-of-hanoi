import React from "react";

import Disk from "./Disk";
import { getLast, getUpToLast, getMeasurements } from "./helpers";
import { constants } from "./constants";

const { DIV_COLORS, DISK_COLORS } = constants;

class App extends React.Component {
  state = { col1: [5, 4, 3, 2, 1], col2: [], col3: [] };

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
    const { col1, col2, col3 } = this.state;
    const width = window.innerWidth / 3;
    const height = window.innerHeight - 150;
    return (
      <div>
        <div style={{ position: "relative", display: "flex" }}>
          <div style={{ width, height, background: DIV_COLORS[0] }} />
          <div style={{ width, height, background: DIV_COLORS[1] }} />
          <div style={{ width, height, background: DIV_COLORS[2] }} />

          <Disk
            active={this.getIsActive(1)}
            xy={this.getPosition(col1, col2, col3, 1)}
            move={this.move}
            size={1}
            color={DISK_COLORS[0]}
            divWidth={width}
          />
          <Disk
            active={this.getIsActive(2)}
            xy={this.getPosition(col1, col2, col3, 2)}
            move={this.move}
            size={2}
            color={DISK_COLORS[1]}
            divWidth={width}
          />
          <Disk
            active={this.getIsActive(3)}
            xy={this.getPosition(col1, col2, col3, 3)}
            move={this.move}
            size={3}
            color={DISK_COLORS[2]}
            divWidth={width}
          />
          <Disk
            active={this.getIsActive(4)}
            xy={this.getPosition(col1, col2, col3, 4)}
            move={this.move}
            size={4}
            color={DISK_COLORS[3]}
            divWidth={width}
          />
          <Disk
            active={this.getIsActive(5)}
            xy={this.getPosition(col1, col2, col3, 5)}
            move={this.move}
            size={5}
            color={DISK_COLORS[4]}
            divWidth={width}
          />
        </div>

        <div
          style={{
            width: window.innerWidth,
            height: 150,
            background: "gainsboro"
          }}
        />
      </div>
    );
  }
}

export default App;
