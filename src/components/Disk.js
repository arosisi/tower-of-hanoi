import { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";

import { getMeasurements, calculatePadding } from "../helpers";

// Visual debugging aid: Set to true to show interactive boundary with a border
// This helps visualize the enlarged touch target area during development
const SHOW_DEBUG_BORDER = false;

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
    fullWindowWidth,
    windowWidth,
    windowHeight,
    divWidth,
    isTiming,
    startTimer,
    baseZIndex = 1
  } = props;
  const [width, height] = getMeasurements(size);
  
  // Calculate padding for enlarged interactive boundary
  const padding = calculatePadding(width, height);
  
  // Container dimensions include padding
  const containerWidth = width + (2 * padding.horizontal);
  const containerHeight = height + (2 * padding.vertical);

  // is the disk being dragged
  const [dragging, setDragging] = useState(false);

  // z-index to put moving disk in front
  // Use baseZIndex for stacking order (smaller disks on top)
  const [zIndex, setZIndex] = useState(baseZIndex);

  // spring to smoothen drag
  const [{ x, y }, api] = useSpring(
    () => ({
      x: xy[0] - padding.horizontal,
      y: xy[1] - padding.vertical,
      onRest() {
        if (!dragging) endMove();
      }
    }),
    [dragging, endMove]
  );

  // move disks via props.xy
  useEffect(() => {
    api.start({ x: props.xy[0] - padding.horizontal, y: props.xy[1] - padding.vertical });
  }, [api, props.xy, padding.horizontal, padding.vertical]);

  // setting max width and centering game shifts x to the right, so correction needed
  const correctX = (x) => {
    if (fullWindowWidth > windowWidth) {
      return x - (fullWindowWidth - windowWidth) / 2;
    }
    return x;
  }

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
      onDrag: ({ event, xy: [rawX, y] }) => {
        event.preventDefault();
        const x = correctX(rawX);
        if (active) {
          // Apply boundary constraints to visual disk position
          const effectiveX =
            x > windowWidth - width / 2
              ? windowWidth - width / 2
              : x < width / 2 ? width / 2 : x;
          const effectiveY =
            y > windowHeight - height ? windowHeight - height : y;
          // Adjust container position to account for padding offset
          api.start({
            x: effectiveX - width / 2 - padding.horizontal,
            y: effectiveY - height / 2 - padding.vertical
          });
          if (zIndex !== 99) {
            setZIndex(99);
          }
        }
      },
      onDragEnd: ({ event, xy: [rawX, y] }) => {
        event.preventDefault();
        const x = correctX(rawX);
        if (active) {
          const colNum = x <= divWidth ? 1 : x <= 2 * divWidth ? 2 : 3;
          endDrag();
          setDragging(false);
          setZIndex(baseZIndex);
          move(colNum, size);
        }
      }
    },
    {
      drag: {
        filterTaps: true
      }
    }
  );

  return (
    <animated.div
      {...bind()}
      style={{
        position: "absolute",
        x,
        y,
        zIndex,
        width: containerWidth,
        height: containerHeight,
        background: "transparent",
        cursor: active ? "grab" : "default",
        touchAction: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // Debug border to visualize interactive boundary (controlled by SHOW_DEBUG_BORDER)
        ...(SHOW_DEBUG_BORDER && { border: "2px dashed rgba(255, 0, 0, 0.5)" })
      }}
    >
      <div
        style={{
          width,
          height,
          borderRadius: "20px",
          background: color,
          pointerEvents: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <span>{size}</span>
      </div>
    </animated.div>
  );
}

export default Disk;
