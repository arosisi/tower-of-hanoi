import React from "react";

import Controller from "./components/Controller";
import Initializer from "./components/Initializer";
import {} from "./helpers";
import { constants } from "./constants";

const { DIV_COLORS } = constants;

class App extends React.Component {
  state = { initializing: true, numDisks: null };

  render() {
    const { initializing, numDisks } = this.state;
    const width = window.innerWidth / 3;
    const height = window.innerHeight - 150;
    return (
      <div>
        <div style={{ position: "relative", display: "flex" }}>
          <div style={{ width, height, background: DIV_COLORS[0] }} />
          <div style={{ width, height, background: DIV_COLORS[1] }} />
          <div style={{ width, height, background: DIV_COLORS[2] }} />

          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              textAlign: "center"
            }}
          >
            {initializing ? (
              <Initializer
                setNumDisks={numDisks =>
                  this.setState({ initializing: false, numDisks })
                }
              />
            ) : (
              <Controller
                numDisks={numDisks}
                divWidth={width}
                restart={() => this.setState({ initializing: true })}
              />
            )}
          </div>
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
