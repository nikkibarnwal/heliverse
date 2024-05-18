import React, { useRef } from "react";
import ReactDOM from "react-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function AnimateMe() {
  const xTo = useRef();
  const yTo = useRef();
  const app = useRef();

  const { context, contextSafe } = useGSAP(
    () => {
      xTo.current = gsap.quickTo(".flair", "x", {
        duration: 0.8,
        ease: "power3",
      });
      yTo.current = gsap.quickTo(".flair", "y", {
        duration: 0.8,
        ease: "power3",
      });
    },
    { scope: app }
  );

  const moveShape = contextSafe((e) => {
    xTo.current(e.clientX);
    yTo.current(e.clientY);
  });

  return (
    <div className="app" ref={app} onMouseMove={(e) => moveShape(e)}>
      <p>Move your mouse around</p>
      <div className="flair" />
    </div>
  );
}

export default AnimateMe;
