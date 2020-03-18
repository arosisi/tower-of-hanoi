import React from "react";
import { useSpring, animated } from "react-spring";

import { getRandInt } from "../helpers";
import { constants } from "../constants";

const { DISK_COLORS, GAME_OVER_MSGS } = constants;
const numColors = DISK_COLORS.length;
const numGameOverMsgs = GAME_OVER_MSGS.length;

function GameOver() {
  // spring to create animation
  const props = useSpring({
    from: { opacity: 0, fontSize: "1rem", color: "white", gameOverMsg: "" },
    to: async next => {
      while (true) {
        const gameOverMsg = GAME_OVER_MSGS[getRandInt(numGameOverMsgs)];
        await next({
          opacity: 1,
          fontSize: "2rem",
          color: DISK_COLORS[getRandInt(numColors)],
          gameOverMsg
        });
        await next({
          opacity: 0,
          fontSize: "1rem",
          color: "white",
          gameOverMsg
        });
      }
    }
  });

  return <animated.div style={props}>{props.gameOverMsg}</animated.div>;
}

export default GameOver;
