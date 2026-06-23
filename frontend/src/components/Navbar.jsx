import React from "react";

const Navbar = () => {
    return (
        <nav className = "bg-white shadow-md flex items-center justify-between px-6 py-4">
            {/* Left Section */}
            <h2 className="text-2xl font-semibold text-slate-800">
                    TaskFlow
            </h2>
            
            {/* Right Section */}
            <div className = "flex items-center gap-4">
                <span className="text-2xl">🔔</span>
                    <img
                        src ="https://i.pravatar.cc/40"
                        alt ="profile"
                        className ="w-10 h-10 rounded-full"
                    />
                    <span className ="font-medium text-slate-700">
                        John Doe
                    </span>
                
            </div>
        </nav>
    )
}

export default Navbar;