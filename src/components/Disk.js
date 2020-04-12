import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { useGesture } from "react-use-gesture";

import { getMeasurements } from "../helpers";

function Disk(props) {
  const {
    active,
    xy,
    startMove,
    endDrag,
    move,
    endMove,
    size,
    color,
    windowWidth,
    windowHeight,
    divWidth,
    isTiming,
    startTimer
  } = props;
  const [width, height] = getMeasurements(size);

  // is the disk being dragged
  const [dragging, setDragging] = useState(false);

  // z-index to put moving disk in front
  const [zIndex, setZIndex] = useState(1);

  // spring to smoothen drag
  const [{ x, y }, setPosition] = useSpring(
    () => ({
      x: xy[0],
      y: xy[1],
      onRest() {
        if (!dragging) endMove();
      }
    }),
    [dragging, endMove]
  );

  // move disks via props.xy
  useEffect(() => {
    setPosition({ x: props.xy[0], y: props.xy[1] });
  }, [setPosition, props.xy]);

  const myRef = React.useRef(null);

  const bind = useGesture(
    {
      onDragStart: ({ event }) => {
        event.preventDefault();
        if (active) {
          startMove();
          setDragging(true);
          if (!isTiming) {
            startTimer();
          }
        }
      },
      onDrag: ({ event, xy: [x, y] }) => {
        event.preventDefault();
        if (active) {
          const effectiveX =
            x > windowWidth - width / 2 ? windowWidth - width / 2 : x;
          const effectiveY =
            y > windowHeight - height ? windowHeight - height : y;
          setPosition({
            x: effectiveX - width / 2,
            y: effectiveY - height / 2
          });
          if (zIndex !== 99) {
            setZIndex(99);
          }
        }
      },
      onDragEnd: ({ event, xy: [x, y] }) => {
        event.preventDefault();
        if (active) {
          const colNum = x <= divWidth ? 1 : x <= 2 * divWidth ? 2 : 3;
          endDrag();
          setDragging(false);
          setZIndex(1);
          move(colNum, size);
        }
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
