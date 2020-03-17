import React from "react";

import Disk from "./Disk";

const COLORS = ["#ffff00", "#93278f", "#7ac943", "#ff7bac", "#f7931e"];

class App extends React.Component {
  render() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    return (
      <div style={{ position: "relative", display: "flex" }}>
        <div
          style={{
            width: width / 3,
            height,
            background: "rgb(215, 169, 227, 0.4)"
          }}
        >
          <Disk x={50} y={100} size={1} color={COLORS[0]} />
          <Disk x={0} y={0} size={2} color={COLORS[1]} />
          <Disk x={100} y={50} size={3} color={COLORS[2]} />
          <Disk x={50} y={150} size={4} color={COLORS[3]} />
          <Disk x={150} y={50} size={5} color={COLORS[4]} />
        </div>
        <div
          style={{
            width: width / 3,
            height,
            background: "rgb(139, 190, 232, 0.4)"
          }}
        ></div>
        <div
          style={{
            width: width / 3,
            height,
            background: "rgb(168, 213, 186, 0.4)"
          }}
        ></div>
      </div>
    );
  }
}

export default App;
