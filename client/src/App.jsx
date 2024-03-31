import { useState } from "react";

import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import FirstSection from "./components/FirstSection";
import PortfolioSection from "./components/PortfolioSection";
import SkillsAndExperience from "./components/SkillsAndExperience";
import ContactUs from "./components/ContactUs";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className=" w-[95%] md:w-11/12 max-w-maxContent mx-auto  relative text-black">
      <NavBar />
      <Hero />
      <FirstSection />
      <PortfolioSection />
      <SkillsAndExperience />
      <ContactUs />
    </div>
  );
}

export default App;
