import React from "react";

const Education = () => {
    const courses = [
        "Data Structures and Algorithms",
        "Operating Systems",
        "Database Management Systems",
        "Computer Vision",
        "Software Design",
        "Computer Architecture"
    ];

    return (
        <div id="education" className="bg-gray-900 text-white py-8 px-8">
            <h2 className="text-4xl font-bold text-center mb-6">Education</h2>

            {/* Main Education Card */}
            <div className="flex justify-center mb-8">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-[80%] md:w-[50%] text-center">
                    <h3 className="text-2xl font-bold text-blue-400">
                        Sonoma State University - Graduated 2024
                    </h3>
                    <p className="text-lg mt-4">Bachelor of Science</p>
                </div>
            </div>

            {/* Courses Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 p-4 rounded-lg shadow-lg text-center"
                    >
                        <p className="text-lg font-bold">{course}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;