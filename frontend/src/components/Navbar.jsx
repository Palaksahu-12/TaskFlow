import React from "react";

const Navbar = () => {
    return (
        <nav className = "bg-white shadow-md flex items-center justify-between px-6 py-4">
            {/* Left Section */}
            <div className ="flex item-center gap-2">
                <div className ="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text -white font-bold text-xl">
                    T
                </div>
                <h1 className="text-2xl font-bold text-slate-800">
                    TaskFlow
                </h1>
            </div>

            {/* Right Section */}
            <div className = "flex items-center gap-6">
                <button className ="text-slate-600 hover:text-blue-600 text-xl">

                </button>
                <div className = "flex items-center gap-3 cursor-pointer">
                    <img
                        src =""
                        alt =""
                        className =""
                    />
                    <span className ="font-medium text-slate-700">
                        John Doe
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;