import React from "react";
import Button from "@material-ui/core/Button";
import Confetti from "react-confetti";
import Snackbar from "@material-ui/core/Snackbar";
import { withStyles } from "@material-ui/core/styles";

import Actions from "./actions/Actions";
import Disk from "./Disk";
import GameOver from "./GameOver";
import Leaderboard from "./Leaderboard";
import Timer from "./Timer";
import {
  get1ToN,
  getLast,
  getUpToSecondLast,
  getMeasurements,
  solve
} from "../helpers";
import { constants } from "../constants";

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
  },
  timer: {
    position: "absolute",
    top: 110,
    left: 0,
    right: 0
  },
  success: {
    width: "fit-content",
    margin: "auto"
  }
};

class Controller extends React.Component {
  state = {
    col1: get1ToN(this.props.numDisks).reverse(),
    col2: [],
    col3: [],
    dragging: false,
    movingDisk: null,
    solving: false,
    handler: null,
    step: 0,
    showLeaderboard: false,
    isTiming: false,
    time: null,
    timeStamp: null,
    hasUsedSolve: false,
    showGameOver: false,
    hasSubmitted: false,
    showSubmissionSuccess: false
  };

  componentWillUnmount() {
    const { handler } = this.state;
    if (handler) {
      clearInterval(handler);
    }
  }

  isGameOver = () => {
    const { numDisks } = this.props;
    const { col2, col3, movingDisk } = this.state;
    return (
      !movingDisk && (col2.length === numDisks || col3.length === numDisks)
    );
  };

  getIsActive = size => {
    const { col1, col2, col3, dragging, movingDisk, solving } = this.state;
    return (
      (!dragging || !movingDisk || movingDisk === size) &&
      !solving &&
      !this.isGameOver() &&
      (getLast(col1) === size ||
        getLast(col2) === size ||
        getLast(col3) === size)
    );
  };

  getPosition = size => {
    const { windowWidth } = this.props;
    const { col1, col2, col3 } = this.state;
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
      return;
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
  };

  solve = () => {
    this.setState({ isTiming: false, hasUsedSolve: true });

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

  show = state => {
    const { solving, handler } = this.state;
    if (solving && !this.isGameOver()) {
      this.setState({ solving: false, ...state }, () => clearInterval(handler));
    } else {
      this.setState({ ...state });
    }
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
      solving,
      showLeaderboard,
      isTiming,
      time,
      timeStamp,
      hasUsedSolve,
      showGameOver,
      hasSubmitted,
      showSubmissionSuccess
    } = this.state;
    const divWidth = windowWidth / 3;
    const isGameOver = this.isGameOver();
    return (
      <div>
        <Actions windowWidth={windowWidth} show={this.show} />

        <div className={classes.controlButtons}>
          {!solving && (
            <Button color='primary' disabled={isGameOver} onClick={this.solve}>
              Solve
            </Button>
          )}
          {solving && (
            <Button color='primary' disabled={isGameOver} onClick={this.stop}>
              Stop
            </Button>
          )}
          <Button color='secondary' onClick={restart}>
            Restart
          </Button>
        </div>

        <div className={classes.leaderboardButton}>
          <Button onClick={() => this.show({ showLeaderboard: true })}>
            Leaderboard
          </Button>
        </div>

        <div className={classes.timer}>
          <Timer
            running={isTiming && !isGameOver}
            disabled={hasUsedSolve}
            recordTime={(time, timeStamp) =>
              this.setState({ time, timeStamp, showGameOver: true })
            }
          />
        </div>

        {showLeaderboard && (
          <Leaderboard
            onClose={() => this.setState({ showLeaderboard: false })}
          />
        )}

        {showGameOver && isGameOver && !hasUsedSolve && !hasSubmitted && (
          <GameOver
            numDisks={numDisks}
            time={time}
            timeStamp={timeStamp}
            onClose={() => this.setState({ showGameOver: false })}
            onSubmit={() =>
              this.setState({ hasSubmitted: true, showSubmissionSuccess: true })
            }
          />
        )}

        {showSubmissionSuccess && (
          <Snackbar
            className={classes.success}
            open={true}
            message='High score submitted!'
            onClose={() => this.setState({ showSubmissionSuccess: false })}
          />
        )}

        {isGameOver && <Confetti width={windowWidth} height={windowHeight} />}

        {get1ToN(numDisks).map(size => (
          <Disk
            key={size}
            active={this.getIsActive(size)}
            xy={this.getPosition(size)}
            startMove={() =>
              this.setState({ dragging: true, movingDisk: size })
            }
            endDrag={() => this.setState({ dragging: false })}
            move={this.move}
            endMove={() => this.setState({ movingDisk: null })}
            size={size}
            color={DISK_COLORS[size - 1]}
            windowWidth={windowWidth}
            windowHeight={windowHeight}
            divWidth={divWidth}
            isTiming={isTiming}
            startTimer={() => {
              const { hasUsedSolve } = this.state;
              if (!hasUsedSolve) {
                this.setState({ isTiming: true });
              }
            }}
          />
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(Controller);
