import React, { useState, useEffect, useRef, useMemo } from "react";

const Projects = ({ setProjectsHeight }) => {
    const [visibleIndexes, setVisibleIndexes] = useState([]);
    const projectRefs = useRef([]);
    const projectsContainerRef = useRef(null); // Ref to measure the section height

    // Memoized projects array
    const projects = useMemo(
        () => [
            {
                title: "WoW Teams",
                description:
                    "An application designed to allow users to search World of Warcraft characters and " +
                    "add them to their team, and assign roles and notes to them. This app had an AWS sql server to store " +
                    "account, character, and team data.",
                link: "https://github.com/conboyr/WowTeamz",
                image: "wowteamsscreenshot.png",
            },
            {
                title: "Eclipse Detection",
                description:
                    "Using the bag of visual words algorithm, and later on, a convolutional neural network, my " +
                    "team and I worked to identify and classify 80 gigabytes of images of a recent solar eclipse.",
                link: "https://github.com/matthew0316/Solar-Eclipse",
                image: "cnn.png",
            },
            {
                title: "C-style Interpreter",
                description:
                    "My team and I designed an interpreter for a c-style language, allowing execution of basic " +
                    "c-style code.",
                link: "https://replit.com/@antennabutt/cs460project#abstractsyntaxtree.cpp",
                image: "interpret.png",
            },
        ],
        [] // Empty dependency array ensures this array is stable
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
            {
                root: null,
                threshold: 0.2,
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

    useEffect(() => {
        if (projectsContainerRef.current) {
            setProjectsHeight(projectsContainerRef.current.offsetHeight);
        }
    }, [projects, setProjectsHeight]); // Include projects in the dependency array

    return (
        <div
            id="projects"
            ref={projectsContainerRef}
            className="bg-gray-900 text-white py-16 px-4 sm:px-8"
        >
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
                        <div className="overflow-hidden rounded-t-lg">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-auto rounded-t-lg"
                            />
                        </div>
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
        </div>
    );
};

export default Projects;