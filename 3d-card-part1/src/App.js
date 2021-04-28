import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSpring, animated } from "react-spring";

//การเปลี่ยนแปลงค่ารูปภาพ ให้ขยับ
const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];

//รับต่าจาก parameter
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function App() {
  const [props, set] = useSpring(() => ({ 
    //ค่าเริ่มต้น
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40}}
    ));

  return (
    <animated.div className="cards" 
          //ส่งค่าที่เม้าขยับ ไปที่ method calc
          onMouseMove= {({clientX : x , clientY : y}) => set({xys : calc(x,y)})}
          onMouseLeave = {() => set({ xys : [0,0,1] })}
          style={{transform : props.xys.interpolate(trans)}}/>
  );
}

export default App;
