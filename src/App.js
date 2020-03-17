import React from "react";

import Disk from "./Disk";
import { getLast, getMeasurements } from "./helpers";
import { constants } from "./constants";

const { DIV_COLORS, DISK_COLORS } = constants;

class App extends React.Component {
  state = { col1: [5, 1], col2: [4, 3, 2], col3: [] };

  getIsActive = size => {
    const { col1, col2, col3 } = this.state;
    return (
      getLast(col1) === size || getLast(col2) === size || getLast(col3) === size
    );
  };

  getPosition = size => {
    const { col1, col2, col3 } = this.state;
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

  render() {
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
            xy={this.getPosition(1)}
            move={this.move}
            size={1}
            color={DISK_COLORS[0]}
            width={width}
          />
          <Disk
            active={this.getIsActive(2)}
            xy={this.getPosition(2)}
            move={this.move}
            size={2}
            color={DISK_COLORS[1]}
            width={width}
          />
          <Disk
            active={this.getIsActive(3)}
            xy={this.getPosition(3)}
            move={this.move}
            size={3}
            color={DISK_COLORS[2]}
            width={width}
          />
          <Disk
            active={this.getIsActive(4)}
            xy={this.getPosition(4)}
            move={this.move}
            size={4}
            color={DISK_COLORS[3]}
            width={width}
          />
          <Disk
            active={this.getIsActive(5)}
            xy={this.getPosition(5)}
            move={this.move}
            size={5}
            color={DISK_COLORS[4]}
            width={width}
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
