import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="fixed top-0 left-0 w-full h-14 bg-gray-700 text-white shadow-md z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Name on the left */}
                <div className="fixed top-4 left-4 text-xl font-bold">Owen Donohue</div>

                {/* Hamburger Menu */}
                <div
                    className={`fixed top-5 right-6 z-50 cursor-pointer transform transition-transform duration-300 ${
                        isMenuOpen ? "-translate-x-64" : "translate-x-0"
                    }`}
                    onClick={handleMenuToggle}
                >
                    {isMenuOpen ? (
                        <FaTimes className="text-2xl text-white hover:text-blue-400 transition"/>
                    ) : (
                        <FaBars className="text-2xl text-white hover:text-blue-400 transition"/>
                    )}
                </div>
            </div>

            {/* Slide-In Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-gray-800 transform ${
                    isMenuOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300 z-40`}
            >
                <ul className="flex flex-col items-start py-4 px-6 space-y-4">
                    <li>
                        <a
                            href="#intro"
                            className="hover:text-blue-400"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Intro
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className="hover:text-blue-400"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About Me
                        </a>
                    </li>
                    <li>
                        <a
                            href="#tools"
                            className="hover:text-blue-400"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Tools
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className="hover:text-blue-400"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Projects
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;