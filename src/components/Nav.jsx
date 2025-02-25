import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="bg-gray-800 py-4 px-6 rounded-lg shadow-md flex space-x-6 mx-auto w-fit">
            <Link to="/about" className="text-white hover:text-blue-400 transition">About</Link>
            <Link to="/#projects" className="text-white hover:text-blue-400 transition">Projects</Link>
            <Link to="/contact" className="text-white hover:text-blue-400 transition">Contact</Link>
        </nav>
    );
};

export default Nav;