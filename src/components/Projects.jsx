import React, { useState, useEffect, useRef } from "react";

const Projects = () => {
    const [visibleIndexes, setVisibleIndexes] = useState([]); // Tracks which projects are visible
    const projectRefs = useRef([]); // Stores refs for each project card

    const projects = [
        {
            title: "WoW Teams",
            description: "An application designed to allow users to search World of Warcraft characters and " +
                "add them to their team, and assign roles and notes to them. This app had an AWS sql server to store " +
                "account, character, and team data.",
            link: "https://github.com/conboyr/WowTeamz", // Link for the project
            image: "wowteamsscreenshot.png", // Replace with your actual image URL
        },
        {
            title: "Eclipse Detection",
            description: "Using the bag of visual words algorithm, and later on, a convolutional neural network, my " +
                "team and I worked to identify and classify 80 gigabytes of images of a recent solar eclipse.",
            link: "https://github.com/matthew0316/Solar-Eclipse", // Link for the project
            image: "cnn.png", // Replace with your actual image URL
        },
        {
            title: "C-style Interpreter",
            description: "My team and I designed an interpreter for a c-style language, allowing execution of basic " +
                "c-style code.",
            link: "https://replit.com/@antennabutt/cs460project#abstractsyntaxtree.cpp", // Link for the project
            image: "interpret.png", // Replace with your actual image URL
        },

    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = Number(entry.target.dataset.index); // Retrieve the index of the observed element
                    if (entry.isIntersecting) {
                        setVisibleIndexes((prev) => [...new Set([...prev, index])]);
                    }
                });
            },
            {
                root: null, // Default: viewport
                threshold: 0.2, // Trigger when 20% of the element is visible
            }
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
        <div id="projects" className="bg-gray-900 text-white py-16 px-4 sm:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
            <div className="grid gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        data-index={index}
                        ref={(el) => (projectRefs.current[index] = el)}
                        className={`relative bg-gray-800 rounded-lg shadow-lg transform transition-all duration-1000 ease-in-out ${
                            visibleIndexes.includes(index)
                                ? "opacity-100 translate-x-0"
                                : index % 2 === 0
                                    ? "opacity-0 -translate-x-10"
                                    : "opacity-0 translate-x-10"
                        }`}
                    >
                        {/* Project Image */}
                        <div className="overflow-hidden rounded-t-lg">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-auto rounded-t-lg"
                            />
                        </div>

                        {/* Project Description */}
                        <div className="p-6">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl font-bold text-blue-400 hover:text-blue-500 transition-colors"
                            >
                                {project.title}
                            </a>
                            <p className="text-sm mt-2">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* Add extra padding to the bottom */}
            <div className="pt-16"></div>
        </div>
    );
};

export default Projects;