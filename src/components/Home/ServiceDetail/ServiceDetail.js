import React from "react";
import { useSpring, animated } from "react-spring";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const ServiceDetail = ({ service }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <animated.div
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ fontFamily: "Poppins", transform: props.xys.interpolate(trans) }}
      className="col-md-4 text-center shadow-sm py-5"
    >
      {
        service.image ? <img style={{height: '50px'}} src={`data:image/png;base64,${service.image.img}`}/>
        :
        <img
        style={{ height: "50px" }}
        src={`https://radiant-springs-91850.herokuapp.com/${service.img}`}
        alt=""
      />
      }
      <h5 style={{ fontWeight: "600" }} className="mt-3 mb-3">
        {service.title}
      </h5>
      <p className="text-secondary text-center">{service.description}</p>
    </animated.div>
  );
};

export default ServiceDetail;
