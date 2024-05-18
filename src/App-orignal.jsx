import "./App.css";
import Footer from "./component/Footer";
import Apply from "./component/apply/Apply";
import Attract from "./component/attract/Attract";
import Browsers from "./component/browsers/Browsers";
import Features from "./component/features/Features";
import Header from "./component/header/Header";
import Magic from "./component/magic/Magic";
import Navbar from "./component/navbar/Navbar";
import Trust from "./component/trust/Trust";

function App() {
  return (
    <>
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
}

export default App;
