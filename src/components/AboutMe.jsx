import React, { useEffect, useRef, useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const AboutMe = ({ projectsHeight }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div
            id="about"
            ref={ref}
            style={{ marginTop: projectsHeight + 32 }}
            className="bg-gray-900 text-white px-4 sm:px-8 py-16"
        >
            <div
                className={`max-w-xl mx-auto text-center transition-opacity duration-1000 ease-in-out ${
                    isVisible ? "opacity-100" : "opacity-0"
                }`}
            >
                <h2 className="text-4xl font-bold mb-6">About Me</h2>
                <p className="text-lg leading-relaxed mb-6">
                    Hi! My name is Owen Donohue. I’m a passionate software engineer with a love for creating and
                    experimenting with innovative designs. As a recent graduate from Sonoma State University, I am
                    looking to learn and experience the computer science industry from head to toe. I enjoy playing
                    video games such as League of Legends and World of Warcraft, as well as various other titles.
                </p>
                <p className="text-lg leading-relaxed mb-8">
                    Please feel free to send me a message!
                </p>
                <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/owen-donohue-7a2474254/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-500 transition-colors"
                    >
                        <FaLinkedin size={24} />
                        LinkedIn
                    </a>
                    {/* GitHub */}
                    <a
                        href="https://github.com/MRLemke"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors"
                    >
                        <FaGithub size={24} />
                        GitHub
                    </a>
                    {/* Email */}
                    <a
                        href="mailto:owenpdonohue@gmail.com"
                        className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
                    >
                        <MdEmail size={24} />
                        owenpdonohue@gmail.com
                    </a>
                    {/* Phone Number */}
                    <div className="flex items-center gap-2 text-yellow-400">
                        <MdEmail size={24} />
                        (707) 295-7222
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;