import React, {useEffect} from "react";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import "./index.css"; // Tailwind CSS styles
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";
import Tools from "./components/Tools";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Education from "./components/Education";

const App = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            easing: "ease-in-out", // Easing function
            once: true, // Whether animation should happen only once
        });
    }, []);
  return (
      <div className="h-screen overflow-y-scroll scroll-smooth bg-gray-900">
          {/* Intro Section */}
          <Navbar/>
          <div className="h-screen">
              <Intro/>
          </div>
          {/* About Me Section */}
          <div className="h-screen">
              <Education/>
          </div>
          <div className="h-screen">
              <Tools/>
          </div>
          <div className="h-screen">
              <Projects/>
          </div>
          <div className="h-screen">
              <AboutMe/>
          </div>
      </div>
  );
};

export default App;