import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Controller from "./components/Controller";
import Initializer from "./components/Initializer";
import { constants } from "./constants";

const { BASE_HEIGHT, CONSOLE_HEIGHT, GROUND_HEIGHT } = constants;

const styles = {
  console: {
    position: "absolute",
    left: 0,
    right: 0,
    textAlign: "center"
  },
  columns: {
    position: "relative",
    display: "flex",
    userSelect: "none"
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
    this.disableTouchMove();

    window.addEventListener("resize", ({ target }) =>
      this.setState({
        windowWidth: target.innerWidth,
        windowHeight: target.innerHeight
      })
    );
  }

  enableScroll = () => {
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      window.removeEventListener("touchmove", this.preventDefault, {
        passive: false
      });
      window.addEventListener("touchmove", this.preventZoom, {
        passive: false
      });
    }
  };

  disableTouchMove = () => {
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      window.removeEventListener("touchmove", this.preventZoom, {
        passive: false
      });
      window.addEventListener("touchmove", this.preventDefault, {
        passive: false
      });
    }
  };

  preventDefault = event => event.preventDefault();

  preventZoom = event => {
    if (event.scale > 1) {
      event.preventDefault();
    }
  };

  render() {
    const { classes } = this.props;
    const { windowWidth, windowHeight, initializing, numDisks } = this.state;
    const colWidth = windowWidth / 3;
    const colHeight = numDisks ? numDisks * BASE_HEIGHT : 0;
    const bufferHeight =
      windowHeight - CONSOLE_HEIGHT - GROUND_HEIGHT - colHeight;
    return (
      <div>
        <div style={{ width: windowWidth, height: CONSOLE_HEIGHT }}>
          <div className={classes.console}>
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
                enableScroll={this.enableScroll}
                disableTouchMove={this.disableTouchMove}
                restart={() =>
                  this.setState({ initializing: true, numDisks: null })
                }
              />
            )}
          </div>
        </div>

        <div style={{ width: windowWidth, height: bufferHeight }} />

        <div className={classes.columns}>
          <div
            style={{
              width: colWidth,
              height: colHeight,
              borderRight: "5px solid #cde4ef"
            }}
          />
          <div
            style={{
              width: colWidth,
              height: colHeight,
              borderRight: "5px solid #cde4ef"
            }}
          />
          <div
            style={{
              width: colWidth,
              height: colHeight
            }}
          />
        </div>

        <div
          style={{
            width: windowWidth,
            height: GROUND_HEIGHT,
            background: "#cde4ef"
          }}
        />
      </div>
    );
  }
}

export default withStyles(styles)(App);
