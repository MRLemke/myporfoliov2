import React, { useState, useEffect, useRef, useMemo } from "react";

const Projects = () => {
    const [visibleIndexes, setVisibleIndexes] = useState([]);
    const projectRefs = useRef([]);

    const projects = useMemo(
        () => [
            {
                title: "WoW Teams",
                description:
                    "An application designed to allow users to search World of Warcraft characters and add them to their team, and assign roles and notes to them. This app had an AWS SQL server to store account, character, and team data.",
                link: "https://github.com/conboyr/WowTeamz",
                image: "wowteamsscreenshot.png",
            },
            {
                title: "Eclipse Detection",
                description:
                    "Using the bag of visual words algorithm, and later on, a convolutional neural network, my team and I worked to identify and classify 80 gigabytes of images of a recent solar eclipse.",
                link: "https://github.com/matthew0316/Solar-Eclipse",
                image: "cnn.png",
            },
            {
                title: "C-style Interpreter",
                description:
                    "My team and I designed an interpreter for a C-style language, allowing execution of basic C-style code.",
                link: "https://replit.com/@antennabutt/cs460project#abstractsyntaxtree.cpp",
                image: "interpret.png",
            },
        ],
        []
    );

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = Number(entry.target.dataset.index);
                    if (entry.isIntersecting) {
                        setVisibleIndexes((prev) => [...new Set([...prev, index])]);
                    }
                });
            },
            { threshold: 0.2 }
        );

        projectRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            // eslint-disable-next-line
            projectRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <div
            id="projects"
            className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center py-16 px-4"
        >
            <h2 className="text-3xl font-bold mb-12">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        data-index={index}
                        ref={(el) => (projectRefs.current[index] = el)}
                        className={`bg-gray-800 rounded-lg shadow-lg p-4 transform transition-all duration-1000 ease-in-out ${
                            visibleIndexes.includes(index)
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                        }`}
                    >
                        <div className="rounded-t-lg overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-40 object-cover"
                            />
                        </div>
                        <div className="mt-4 text-center">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl font-bold text-blue-400 hover:text-blue-500 transition-colors"
                            >
                                {project.title}
                            </a>
                            <p className="text-sm mt-2">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;