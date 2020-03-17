import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { useGesture } from "react-use-gesture";

import { getMeasurements } from "./helpers";

function Disk(props) {
  const { active, xy, move, size, color, divWidth } = props;
  const [width, height] = getMeasurements(size);

  // spring to smoothen drag
  const [{ x, y }, setPosition] = useSpring(() => ({ x: xy[0], y: xy[1] }));

  // z-index to put moving disk in front
  const [zIndex, setZIndex] = useState(1);

  const myRef = React.useRef(null);

  const bind = useGesture(
    {
      onDrag: ({ event, xy: [x, y], cancel }) => {
        event.preventDefault();
        if (active) {
          setPosition({ x: x - width / 2, y: y - height / 2 });
          setZIndex(99);
        }
      },
      onDragEnd: ({ event, xy: [x, y] }) => {
        event.preventDefault();
        const colNum = x <= divWidth ? 1 : x <= 2 * divWidth ? 2 : 3;
        const moveTo = move(colNum, size);
        setPosition({ x: moveTo[0], y: moveTo[1] });
        setZIndex(1);
      }
    },
    {
      domTarget: myRef,
      eventOptions: { passive: false }
    }
  );

  React.useEffect(bind, [bind]);

  return (
    <animated.div
      ref={myRef}
      {...bind()}
      style={{
        position: "absolute",
        x,
        y,
        zIndex,
        width,
        height,
        borderRadius: "20px",
        background: color,
        cursor: active ? "grab" : "default",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <span style={{ alignSelf: "center" }}>{size}</span>
    </animated.div>
  );
}

export default Disk;
