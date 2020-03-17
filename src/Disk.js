import React from "react";
import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";

function Disk(props) {
  const [{ x, y }, set] = useSpring(() => ({ x: props.x, y: props.y }));

  const myRef = React.useRef(null);

  const bind = useDrag(
    ({ event, xy: [x, y], cancel }) => {
      event.preventDefault();
      if (x > 500) {
        set({ x: props.x, y: props.y });
        cancel();
      } else {
        set({ x: x - 25, y: y - 25 });
      }
    },
    {
      domTarget: myRef,
      eventOptions: { passive: false }
    }
  );

  React.useEffect(bind, [bind]);

  const { size, color } = props;

  return (
    <animated.div
      ref={myRef}
      {...bind()}
      style={{
        position: "absolute",
        x,
        y,
        width: 50 * (size * 0.6 + 0.4),
        height: 10 * (size * 0.6 + 0.4),
        borderRadius: "50%",
        background: color,
        cursor: "grab",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <span style={{ alignSelf: "center" }}>{size}</span>
    </animated.div>
  );
}

export default Disk;
