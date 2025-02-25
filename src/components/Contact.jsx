import React, { useState } from "react";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {MdEmail} from "react-icons/md";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://owenportfolio.onrender.com", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                alert("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                alert("Error: " + data.error);
            }
        } catch (error) {
            console.error(error);
            alert("Failed to send message.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-8 py-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-8 self-center">Contact Me</h1>
            <form onSubmit={handleSubmit} className="w-full max-w-lg p-6">
                <div className="mb-4">
                    <label className="block text-gray-300 text-lg mb-2" htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-300 text-lg mb-2" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-300 text-lg mb-2" htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 transition text-white font-bold py-2 px-4 rounded-md"
                >
                    Send Message
                </button>
            </form>
            <div className="flex justify-center space-x-6 text-2xl mt-12 w-full">
                <a href="https://github.com/MRLemke" target="_blank" rel="noopener noreferrer"
                   className="text-white hover:text-gray-400 transition">
                    <FaGithub/>
                </a>
                <a href="https://www.linkedin.com/in/owen-donohue-7a2474254/" target="_blank" rel="noopener noreferrer"
                   className="text-white hover:text-blue-400 transition">
                    <FaLinkedin/>
                </a>
                <a href="mailto:owenpdonohue@gmail.com" className="text-white hover:text-green-400 transition">
                    <MdEmail/>
                </a>
            </div>
        </div>
    );
};

export default Contact;
