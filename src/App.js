import React from "react";

import Disk from "./Disk";

class App extends React.Component {
  render() {
    return (
      <div
        style={{
          position: "relative"
        }}
      >
        <Disk x={50} y={100} />
        <Disk x={0} y={0} />
      </div>
    );
  }
}

export default App;
