import React, { useState, useEffect } from "react";
import Nav from "./Nav";

const Intro = () => {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const roles = [
        "Software Engineer",
        "Backend Developer",
        "Frontend Developer",
        "Jazz Enthusiast",
        "Trumpeter",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % roles.length);
                setFade(true);
            }, 500);
        }, 4000);
        return () => clearInterval(interval);
    }, [roles.length]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-900 text-white px-4 relative">
            <h1 className="text-4xl sm:text-5xl font-bold mb-12">Owen Donohue</h1>
            <div
                className={`text-xl sm:text-2xl text-gray-400 mb-12 transition-opacity duration-500 ${
                    fade ? "opacity-100" : "opacity-0"
                }`}
            >
                {roles[index]}
            </div>
            <div className="absolute bottom-8">
                <Nav/>
            </div>
        </div>
    );
};

export default Intro;