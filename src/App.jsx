import { useEffect } from "react";
import "./App.css";
import { gsap } from "gsap";
import Footer from "./component/Footer";
import Apply from "./component/apply/Apply";
import Attract from "./component/attract/Attract";
import Browsers from "./component/browsers/Browsers";
import Features from "./component/features/Features";
import Header from "./component/header/Header";
import Magic from "./component/magic/Magic";
import Navbar from "./component/navbar/Navbar";
import Trust from "./component/trust/Trust";

const App = () => {
  useEffect(() => {
    gsap.set(".ball", { xPercent: -50, yPercent: -50 });
    let targets = gsap.utils.toArray(".ball");
    window.addEventListener("mousemove", (e) => {
      gsap.to(targets, {
        duration: 0.5,
        x: e.clientX,
        y: e.clientY,
        ease: "power1.out",
        overwrite: "auto",
        stagger: 0.02,
      });
    });
  }, []);

  return (
    <>
      <div className="ball customBgGradient w-4 h-4 fixed top-0 left-0 rounded-full"></div>
      <div className="ball customBgGradient w-4 h-4 fixed top-0 left-0 rounded-full"></div>
      <div className="ball customBgGradient w-4 h-4 fixed top-0 left-0 rounded-full"></div>
      <div className="ball customBgGradient w-4 h-4 fixed top-0 left-0 rounded-full"></div>
      <div className="ball customBgGradient w-4 h-4 fixed top-0 left-0 rounded-full"></div>
      {/* <h2 className="text-center text-4xl font-bold text-blue-900">
        Mouse Hover Effect
      </h2> */}

      <Navbar />
      <Header />
      <Attract />
      <Trust />
      <Magic />
      <Apply />
      <Browsers />
      <Features />
      <Footer />
    </>
  );
};

export default App;
