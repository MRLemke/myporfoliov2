import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Tools from "./components/Tools";
import Projects from "./components/Projects";
import Nav from "./components/Nav"; // Import the Nav component
import "./index.css"; // Tailwind CSS styles
import "aos/dist/aos.css";
import Contact from "./components/Contact";

const App = () => {
    const [projectsHeight, setProjectsHeight] = useState(0);

    return (
        <Router>
            <div className="bg-gray-900 text-white">
                <Intro />
                <Routes>
                    {/* Home Page */}
                    <Route
                        path="/"
                        element={
                            <div className="min-h-screen">


                                <Projects setProjectsHeight={setProjectsHeight} />
                            </div>
                        }
                    />
                    {/* About Me Page */}
                    <Route path="/about" element={<AboutMe />} />
                    {/* contact page */}
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;