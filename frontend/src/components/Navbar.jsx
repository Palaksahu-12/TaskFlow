const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm px-8 py-4 flex justify-between items-center">
      {/* Left Section */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800">
          TaskFlow
        </h2>

        <p className="text-sm text-gray-500">
          Manage your projects efficiently
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <button className="text-2xl hover:scale-110 transition">
          🔔
        </button>

        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/40"
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-blue-500"
          />

          <div>
            <p className="font-semibold text-slate-800">
              John Doe
            </p>

            <p className="text-sm text-gray-500">
              Developer
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;