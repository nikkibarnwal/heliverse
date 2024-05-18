// DraggableFoggy.js
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "@gsap/Draggable";
import "./DraggableFoggy.css"; // Custom styles for foggy effect

gsap.registerPlugin(Draggable);

const DraggableFoggy = () => {
  const foggyRef = useRef(null);

  useEffect(() => {
    // Create the foggy animation
    const foggyElement = foggyRef.current;

    Draggable.create(foggyElement, {
      type: "x,y",
      edgeResistance: 0.65,
      bounds: window,
      inertia: true,
    });

    gsap.to(foggyElement, {
      duration: 20,
      x: "random(-200, 200)",
      y: "random(-200, 200)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.fromTo(
      foggyElement,
      { opacity: 0.3 },
      {
        opacity: 1,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      }
    );
  }, []);

  return (
    <div className="relative w-full h-screen bg-gray-900 overflow-hidden">
      <div
        ref={foggyRef}
        className="absolute top-0 left-0 w-[300px] h-[300px] bg-white opacity-30 foggy"
      ></div>
      <div className="flex items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold">Draggable Foggy Animation</h1>
      </div>
    </div>
  );
};

export default DraggableFoggy;
