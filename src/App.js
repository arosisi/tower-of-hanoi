import React from "react";

import Controller from "./components/Controller";
import Initializer from "./components/Initializer";
import { constants } from "./constants";

const { DIV_COLORS } = constants;

class App extends React.Component {
  state = {
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
    initializing: true,
    numDisks: null
  };

  componentDidMount() {
    window.addEventListener("resize", ({ target }) =>
      this.setState({
        windowWidth: target.innerWidth,
        windowHeight: target.innerHeight
      })
    );
  }

  render() {
    const { windowWidth, windowHeight, initializing, numDisks } = this.state;
    const divWidth = windowWidth / 3;
    const divHeight = windowHeight - 150;
    return (
      <div>
        <div
          style={{ position: "relative", display: "flex", userSelect: "none" }}
        >
          <div
            style={{
              width: divWidth,
              height: divHeight,
              background: DIV_COLORS[0]
            }}
          />
          <div
            style={{
              width: divWidth,
              height: divHeight,
              background: DIV_COLORS[1]
            }}
          />
          <div
            style={{
              width: divWidth,
              height: divHeight,
              background: DIV_COLORS[2]
            }}
          />

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
                windowWidth={windowWidth}
                windowHeight={windowHeight}
                restart={() => this.setState({ initializing: true })}
              />
            )}
          </div>
        </div>

        <div
          style={{
            width: windowWidth,
            height: 150,
            background: "gainsboro"
          }}
        />
      </div>
    );
  }
}

export default App;
