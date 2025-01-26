import React, {useEffect, useState} from "react";
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
    // eslint-disable-next-line
    const [projectsHeight, setProjectsHeight] = useState(0);

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            easing: "ease-in-out", // Easing function
            once: true, // Whether animation should happen only once
        });
    }, []);
  return (
      <div className="bg-gray-900 text-white">
          {/* Navbar */}
          <Navbar />

          {/* Intro Section */}
          <div className="min-h-screen relative">
              <Intro />
          </div>

          {/* Education Section */}
          <div className="bg-gray-900 text-white py-4 px-8">
              <Education />
          </div>

          {/* Tools Section */}
          <div className="min-h-screen">
              <Tools />
          </div>

          {/* Projects Section */}
          <div className="min-h-screen">
              <Projects setProjectsHeight={setProjectsHeight} />
          </div>

          {/* About Me Section */}
          <div className="bg-gray-900 text-white py-4 px-8">
              <AboutMe />
          </div>
      </div>
  );
};

export default App;