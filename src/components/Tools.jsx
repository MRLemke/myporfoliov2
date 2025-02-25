import React from "react";

const Tools = () => {
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
            className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white"
        >
            <h2 className="text-3xl font-bold mb-8">Tools I Use</h2>
            <div className="grid grid-cols-3 gap-10 text-center">
                {tools.map((tool, index) => (
                    <div
                        key={index}
                        className="p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition"
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
