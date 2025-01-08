import React from "react";

const Header = () => {
    return (
        <div className="flex justify-between items-center px-5 py-3 text-white text-lg">
            <div className="font-bold">Owen Donohue</div>
            <div className="flex flex-col gap-1 cursor-pointer">
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
            </div>
        </div>
    );
};

export default Header;