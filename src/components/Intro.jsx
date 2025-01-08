import React, { useState, useEffect } from "react";

const Intro = () => {
    const [index, setIndex] = useState(0);
    const roles = ["Software Engineer", "Backend Developer", "Frontend Developer", "Jazz Enthusiast", "Trumpeter", "World of Warcraft Raider"];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }, 4000); // Matches the duration of the animation
        return () => clearInterval(interval);
    }, [roles.length]);

    return (
        <div className="flex items-center justify-center h-screen bg-gray-900 text-white px-4">
            {/* Left Column: Name, Roles, and Links */}
            <div className="flex flex-col justify-center items-end flex-1 text-left space-y-2">
                <h1 className="text-5xl font-bold ">Owen Donohue</h1>
                <div className="text-2xl text-gray-400 cycle-text">{roles[index]}
                </div>

                {/* Links Section */}
                <div className="flex space-x-4 mt-4">
                    {/* Resume Link */}
                    <a
                        href="/Resume-01-06-25.pdf" // Replace with the path to your resume file
                        download
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                    >
                        Resume
                    </a>
                    {/* Projects Link */}
                    <a
                        href="#projects" // Navigate to the projects section
                        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                    >
                        Projects
                    </a>
                </div>
            </div>

            {/* Right Column: Placeholder for Image */}
            <div className="flex items-center justify-start flex-1 px-8">
                <div className="w-48 h-48 bg-gray-700 rounded-full">
                    {/* Replace this div with your headshot */}
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
