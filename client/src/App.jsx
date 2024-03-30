import { useState } from "react";

import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import FirstSection from "./components/FirstSection";
import PortfolioSection from "./components/PortfolioSection";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="w-11/12 max-w-maxContent mx-auto  relative text-black">
      <NavBar />
      <Hero />
      <FirstSection />
      <PortfolioSection />
    </div>
  );
}

export default App;
