import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { useGesture } from "react-use-gesture";

import { getMeasurements } from "./helpers";

function Disk(props) {
  const { active, xy, size, color } = props;
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
        // if (x > 500) {
        //   props.move(x, y);
        //   setPosition({ x: props.x, y: props.y });
        //   cancel();
        // } else {
        //   setPosition({ x: x - 25, y: y - 25 });
        // }
        if (active) {
          setPosition({ x: x - width / 2, y: y - height / 2 });
          setZIndex(99);
        }
      },
      onDragEnd: ({ xy: [x, y] }) => {
        // if (x )
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
