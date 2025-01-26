import React, { useEffect, useRef, useState } from "react";

const Education = () => {
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

    const courses = [
        "Data Structures and Algorithms",
        "Operating Systems",
        "Database Management Systems",
        "Computer Vision",
        "Software Design",
        "Computer Architecture",
    ];

    return (
        <div
            id="education"
            ref={ref}
            className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white"
        >
            <h2
                className={`text-3xl font-bold mb-8 transition duration-1000 ease-in-out ${
                    isVisible ? "animate-fadeIn" : "opacity-0"
                }`}
            >
                Education
            </h2>
            <div
                className={`flex flex-col items-center text-center transition duration-1000 ease-in-out ${
                    isVisible ? "animate-fadeIn" : "opacity-0"
                }`}
            >
                {/* Main Education Card */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-[80%] md:w-[50%] mb-8">
                    <h3 className="text-2xl font-bold text-blue-400">
                        Sonoma State University - Graduated 2024
                    </h3>
                    <p className="text-lg mt-4">Bachelor of Science</p>
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            className="p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition"
                        >
                            <p className="text-lg font-bold">{course}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Education;