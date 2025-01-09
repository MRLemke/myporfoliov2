import React, { useEffect, useRef, useState } from "react";

const Tools = () => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the section is visible
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                // eslint-disable-next-line
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const tools = [
        { name: "Git", logo: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" },
        { name: "C++", logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" },
        { name: "React.Js", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
        { name: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
        { name: "Python", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
        { name: "MySQL", logo: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg" },
        { name: "Jupyter", logo: "https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg" },
        { name: "Node.js", logo: "https://nodejs.org/static/images/logo.svg" },
        { name: "C#", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png" },
    ];

    return (
        <div
            id="tools"
            ref={ref}
            className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white"
        >
            <h2
                className={`text-3xl font-bold mb-8 transition duration-1000 ease-in-out ${
                    isVisible ? "animate-fadeIn" : "opacity-0"
                }`}
            >
                Tools I Use
            </h2>
            <div
                className={`grid grid-cols-3 gap-10 text-center transition duration-1000 ease-in-out ${
                    isVisible ? "animate-fadeIn" : "opacity-0"
                }`}
            >
                {tools.map((tool, index) => (
                    <div
                        key={index}
                        className="p-4 bg-gray-700 rounded-lg shadow-md hover:bg-gray-600 transition"
                    >
                        <img
                            src={tool.logo}
                            alt={`${tool.name} logo`}
                            className="w-12 h-12 mx-auto mb-4"
                        />
                        <span>{tool.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tools;

