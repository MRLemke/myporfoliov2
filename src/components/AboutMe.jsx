import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const AboutMe = () => {
    return (
        <div className="flex flex-col items-start justify-center min-h-screen bg-gray-900 text-white px-8 py-16 max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-8 self-center">About Me</h1>

            {/* Profile Image */}
            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden mb-6 self-center">
                <img
                    src="/headshot.jpg"
                    alt="Owen Donohue"
                    className="w-full h-full object-cover"
                />
            </div>
            {/* Bio Section */}
            <div className="flex flex-col items-start max-w-2xl w-full mb-8">
                <h2 className="text-2xl font-semibold mb-4">Professional Background</h2>
                <p className="text-lg text-left">
                    Hi! I'm Owen Donohue, a highly motivated recent graduate with a Bachelor's degree in Computer Science from Sonoma State University.
                    I am eager to apply my strong analytical skills and knowledge gained through my coursework in computer vision, algorithms, and software design
                    to a dynamic work environment. I am particularly passionate about web design and software development and excited to contribute fresh perspectives
                    and a strong work ethic to a team.
                </p>
            </div>
            {/* Motivation Section */}
            <div className="flex flex-col items-start max-w-2xl w-full mb-8">
                <h2 className="text-2xl font-semibold mb-4">Motivation</h2>
                <p className="text-lg text-left">
                    I've been playing video games since I was 5 years old, and ever since then, my desire to learn how computers function
                    only grew stronger as I got older. This passion led me to pursue a degree in Computer Science,
                    where I developed a deep appreciation for problem-solving and software development.
                </p>
            </div>


            {/* Personal Section */}
            <div className="flex flex-col items-start max-w-2xl w-full mb-8">
                <h2 className="text-2xl font-semibold mb-4">Personal</h2>
                <p className="text-lg text-left">
                    In my personal time, I love experimenting with and cooking new recipes, gaming, and hiking.
                    I play the trumpet as well, and have been involved in my local community band for the past year.
                </p>
            </div>

            {/* Education Section */}
            <div className="text-left mt-8">
                <h2 className="text-2xl font-semibold mb-2">Education</h2>
                <p className="text-lg">Sonoma State University</p>
                <p className="text-md text-gray-400">BS in Computer Science, 2020-2024</p>
            </div>
            {/* Social Links */}
            <div className="flex justify-center space-x-6 text-2xl mt-12 w-full">
                <a href="https://github.com/MRLemke" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/owen-donohue-7a2474254/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition">
                    <FaLinkedin />
                </a>
                <a href="mailto:owenpdonohue@gmail.com" className="text-white hover:text-green-400 transition">
                    <MdEmail />
                </a>
            </div>
        </div>
    );
};

export default AboutMe;
