import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Controller from "./components/Controller";
import Initializer from "./components/Initializer";
import { constants } from "./constants";

const { DIV_COLORS } = constants;

const styles = {
  overground: {
    position: "relative",
    display: "flex",
    userSelect: "none"
  },
  game: {
    position: "absolute",
    left: 0,
    right: 0,
    textAlign: "center"
  }
};

class App extends React.Component {
  state = {
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
    initializing: true,
    numDisks: null
  };

  componentDidMount() {
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      window.addEventListener(
        "touchmove",
        event => {
          if (event.scale > 1) {
            event.preventDefault();
          }
        },
        { passive: false }
      );
    }

    window.addEventListener("resize", ({ target }) =>
      this.setState({
        windowWidth: target.innerWidth,
        windowHeight: target.innerHeight
      })
    );
  }

  render() {
    const { classes } = this.props;
    const { windowWidth, windowHeight, initializing, numDisks } = this.state;
    const divWidth = windowWidth / 3;
    const divHeight = windowHeight - 150;
    return (
      <div>
        <div className={classes.overground}>
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

          <div className={classes.game}>
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

export default withStyles(styles)(App);
