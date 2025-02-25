import React, { useMemo } from "react";

const Projects = () => {
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

    return (
        <div id="projects" className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-12 px-4">
            <h2 className="text-2xl font-bold mb-8">Projects</h2>
            <div className="flex flex-col gap-8 max-w-3xl w-full">
                {projects.map((project, index) => (
                    <div key={index} className="flex flex-col items-center w-full">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full max-w-lg h-64 object-cover rounded-lg"
                        />
                        <div className="mt-4 text-center">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl font-bold text-blue-400 hover:text-blue-500 transition-colors"
                            >
                                {project.title}
                            </a>
                            <p className="text-md mt-2">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
