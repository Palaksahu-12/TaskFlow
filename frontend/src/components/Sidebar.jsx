import {Link, useLocation} from "react-router-dom";

const Sidebar = () =>{
    const location = useLocation();

    const menuItems = [
        {name: "Dashboard", path: "/dashboard"},
        {name: "Projects", path: "/projects"},
        {name: "Profile", path: "/profile"},
    ];

    return(
        <div className="w-64 h-screen bg-slate-900 text-white p-5">
            <h1 className="text-2xl font-bold mb-8">
                TaskFlow
            </h1>

            <nav>
                <ul className="space-y-2">
                    {menuItems.map((item) =>(
                    <li key={item.path}>
                        <Link to={item.path}
                        className={`block px-4 py-3 rounded-lg transition ${location.pathname === item.path ? "bg-blue-600":"hover:bg-slate-800"}`}>
                            {item.name}
                        </Link>
                    </li>
                    ))}
                </ul>
            </nav>

            <div className="absolute bottom-5 left-5">
                <button className="px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600">
                    Logout
                </button>
            </div>
        </div>
    )
};

export default Sidebar;