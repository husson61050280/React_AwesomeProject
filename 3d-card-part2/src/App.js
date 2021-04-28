import React, { useState, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSpring, animated } from "react-spring";
import ReactParticles from "react-particles-js";
import particlesConfig from "./particles-config.js";
import "./style.scss";


function App() {
  return (
<div className="main">
  <Particles>
    <Hero>
      <div className="container">
        <Info />
        <div className="row">
          {cards.map((card , i) => (
            <div className="column">
              <Card>
                <div className="card-title">
                  {card.title}
                </div>
                <div className="card-body">
                  {card.description}
                </div>
                <Target ratio={card.imageRatio} src={card.image} />
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Hero>
  </Particles>
</div>
  );
}

function Info() {
  return (
    <div className="info">
      Spring cards from
      <a href="#" target="_blank">
        divjoy.com
      </a>
      <div className="notice">(Best viewed at larger screen width)</div>
    </div>
  );
}

function Target({ ratio, src }) {
  return (
    <div className="image-container">
      <div className="image-inner-container">
        <div className="ratio" style={{ paddingTop: ratio * 100 + "%" }}>
          <div className="ratio-inner">
            <img src={src} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero({ children }) {
  return (
    <div className="hero">
      <div className="hero-body">{children}</div>
    </div>
  );
}

//background
function Particles({ children }) {
  return (
    <div style={{ position: "relative" }}>
       <ReactParticles
        params={particlesConfig}
        style={{
          position: "absolute",
          zIndex: 1,
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
      />
      <div style={{ position: "relative" }}>
        {children}
      </div>
    </div>
  );
}

function Card({ children }) {
  const ref = useRef();
  const [isHovered, setHovered] = useState(false);
  const [animatedProps, setAnimatedProps] = useSpring(() => {
    return {
      xys: [0, 0, 1],
      config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 },
    };
  });

  return (
    <animated.div
      ref={ref}
      className="card"
      onMouseEnter={() => setHovered(true)}
      onMouseMove={({ clientX, clientY }) => {
        const x =
          clientX -
          (ref.current.offsetLeft -
            (window.scrollX || window.pageXOffset || document.body.scrollLeft));
        const y =
          clientY -
          (ref.current.offsetTop -
            (window.scrollY || window.pageYOffset || document.body.scrollTop));

        const dampen = 50;
        const xys = [
          -(y - ref.current.clientHeight / 2) / dampen, //rotate X
          (x - ref.current.clientWidth / 2) / dampen,
          1.07, //rotateY
        ];

        //update values to animate to
        setAnimatedProps({ xys: xys });
      }}
      onMouseLeave={() => {
        setHovered(false);
        setAnimatedProps({ xys: [0, 0, 1] });
      }}

      style={{
        zIndex: isHovered ? 2 : 1,
        transform: animatedProps.xys.interpolate(
          (x, y, s) =>
            `perspective(600px) rotate(${x}deg) rotate(${y}deg) scale(${s})`
        ),
      }}
    >
      {children}
      </animated.div>
  );
}

//data
const cards = [
  {
    title: "Build faster",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, asperiores?",
    image: "https://images.unsplash.com/photo-1596311294593-17b6127e7e10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    imageRatio: 784 / 1016,
  },

  {
    title: "Tweek anything",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, asperiores?",
    image: "https://images.unsplash.com/photo-1596374246413-caaca268d445?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    imageRatio: 839 / 1133,
  },

  {
    title: "Export your code",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, asperiores?",
    image: "https://images.unsplash.com/photo-1581957549867-c8bf84dc0094?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    imageRatio: 730 / 1030,
  },
];

export default App;
