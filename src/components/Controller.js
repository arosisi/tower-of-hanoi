import React from "react";
import Button from "@material-ui/core/Button";
import Confetti from "react-confetti";
import { withStyles } from "@material-ui/core/styles";

import Disk from "./Disk";
import Leaderboard from "./Leaderboard";
import {
  get1ToN,
  getLast,
  getUpToSecondLast,
  getMeasurements,
  solve
} from "../helpers";
import { constants } from "../constants";
import privateInfo from "../privateInfo";

const { DISK_COLORS } = constants;

const styles = {
  controlButtons: {
    position: "absolute",
    top: 30,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "center"
  },
  leaderboardButton: {
    position: "absolute",
    top: 70,
    left: 0,
    right: 0
  }
};

class Controller extends React.Component {
  state = {
    col1: get1ToN(this.props.numDisks).reverse(),
    col2: [],
    col3: [],
    solving: false,
    handler: null,
    step: 0,
    showLeaderboard: false,
    fetching: false,
    highScores: []
  };

  componentWillUnmount() {
    const { handler } = this.state;
    if (handler) {
      clearInterval(handler);
    }
  }

  isGameOver = () => {
    const { numDisks } = this.props;
    const { col2, col3 } = this.state;
    return col2.length === numDisks || col3.length === numDisks;
  };

  getIsActive = size => {
    const { col1, col2, col3, solving } = this.state;
    return (
      !solving &&
      !this.isGameOver() &&
      (getLast(col1) === size ||
        getLast(col2) === size ||
        getLast(col3) === size)
    );
  };

  getPosition = (col1, col2, col3, size) => {
    const { windowWidth } = this.props;
    const halfDivWidth = windowWidth / 6;
    const diskWidth = getMeasurements(size)[0];
    if (col1.includes(size)) {
      const x = halfDivWidth - diskWidth / 2;
      const y = this.getY(col1, size);
      return [x, y];
    }

    if (col2.includes(size)) {
      const x = halfDivWidth * 3 - diskWidth / 2;
      const y = this.getY(col2, size);
      return [x, y];
    }

    const x = halfDivWidth * 5 - diskWidth / 2;
    const y = this.getY(col3, size);
    return [x, y];
  };

  getY = (col, size) => {
    const { windowHeight } = this.props;
    const divHeight = windowHeight - 150;
    const diskHeight = getMeasurements(size)[1];
    let y = divHeight - diskHeight;
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

    const newFromCol = getUpToSecondLast(fromCol);
    const newToCol = [...toCol, size];

    // prettier-ignore
    const newCol1 = col1 === fromCol ? newFromCol : col1 === toCol ? newToCol : col1
    // prettier-ignore
    const newCol2 = col2 === fromCol ? newFromCol : col2 === toCol ? newToCol : col2
    // prettier-ignore
    const newCol3 = col3 === fromCol ? newFromCol : col3 === toCol ? newToCol : col3

    this.setState({
      col1: newCol1,
      col2: newCol2,
      col3: newCol3
    });
    return this.getPosition(newCol1, newCol2, newCol3, size);
  };

  solve = () => {
    const { numDisks } = this.props;
    const { col1, col2, col3 } = this.state;
    const steps = JSON.parse(solve(numDisks, [...col1], [...col2], [...col3]));
    this.setState({ solving: true, steps, step: 0 }, () => {
      const handler = setInterval(() => {
        const { steps, step } = this.state;
        if (step < steps.length) {
          this.setState({ ...steps[step], step: step + 1 });
        } else {
          clearInterval(handler);
        }
      }, 1000);
      this.setState({ handler });
    });
  };

  stop = () => {
    const { handler } = this.state;
    this.setState({ solving: false }, () => clearInterval(handler));
  };

  showLeaderboard = () => {
    const { solving, handler } = this.state;
    if (solving) {
      this.setState(
        { solving: false, showLeaderboard: true, fetching: true },
        () => {
          this.fetchHighScores();
          clearInterval(handler);
        }
      );
    } else {
      this.setState(
        { showLeaderboard: true, fetching: true },
        this.fetchHighScores
      );
    }
  };

  fetchHighScores = () => {
    fetch(privateInfo.api_endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "get-high-scores" })
    })
      .then(response => response.json())
      .then(response => {
        if (response.success) {
          this.setState({
            fetching: false,
            highScores: response.highScores.sort(
              ({ NumDisks: NumDisks1 }, { NumDisks: NumDisks2 }) =>
                NumDisks1 - NumDisks2
            )
          });
        } else {
          this.setState({ fetching: false });
          console.log(response.message);
        }
      })
      .catch(error => console.log("Unable to connect to API.", error));
  };

  render() {
    const {
      classes,
      numDisks,
      windowWidth,
      windowHeight,
      restart
    } = this.props;
    const {
      col1,
      col2,
      col3,
      solving,
      showLeaderboard,
      fetching,
      highScores
    } = this.state;
    const divWidth = windowWidth / 3;
    return (
      <div>
        <div className={classes.controlButtons}>
          {!solving && (
            <Button
              color='primary'
              disabled={this.isGameOver()}
              onClick={this.solve}
            >
              Solve
            </Button>
          )}
          {solving && (
            <Button
              color='primary'
              disabled={this.isGameOver()}
              onClick={this.stop}
            >
              Stop
            </Button>
          )}
          <Button color='secondary' onClick={restart}>
            Restart
          </Button>
        </div>

        <div className={classes.leaderboardButton}>
          <Button onClick={this.showLeaderboard}>Leaderboard</Button>
        </div>

        <Leaderboard
          open={showLeaderboard}
          fetching={fetching}
          highScores={highScores}
          onClose={() => this.setState({ showLeaderboard: false })}
        />

        {this.isGameOver() && (
          <Confetti width={windowWidth} height={windowHeight} />
        )}

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

export default withStyles(styles)(Controller);
