import React, { useState, useEffect } from "react";

const Intro = () => {
    const [index, setIndex] = useState(0);
    const roles = [
        "Software Engineer",
        "Backend Developer",
        "Frontend Developer",
        "Jazz Enthusiast",
        "Trumpeter",

    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }, 4000); // Matches the duration of the animation
        return () => clearInterval(interval);
    }, [roles.length]);

    return (
        <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-gray-900 text-white px-4 sm:px-8">
            {/* Left Column: Name, Roles, and Links */}
            <div className="flex flex-col justify-center items-center md:items-end flex-1 text-center md:text-left space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">
                    Owen Donohue
                </h1>
                <div className="text-xl sm:text-2xl lg:text-3xl text-gray-400 cycle-text">
                    {roles[index]}
                </div>

                {/* Links Section */}
                <div className="flex space-x-4 mt-4">
                    <a
                        href="/resume-updated-1-9-2025.pdf"
                        download
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                    >
                        Resume
                    </a>
                    <a
                        href="#projects"
                        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                    >
                        Projects
                    </a>
                </div>
            </div>

            {/* Right Column: Placeholder for Image */}
            <div className="flex items-center justify-center md:justify-start flex-1 mt-8 md:mt-0">
                <div className="w-36 h-36 sm:w-48 sm:h-48 bg-gray-700 rounded-full md:ml-8">
                    <img
                        src="/headshot.jpg"
                        alt="Owen Donohue Headshot"
                        className="w-full h-full object-cover rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Intro;