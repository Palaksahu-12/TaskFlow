import {Link, useLocation} from "react-router-dom";

const Sidebar = () =>{
    const location = useLocation();

    const menuItems = [
        {name: "Dashboard", path: "/dashboard"},
        {name: "Projects", path: "/projects"},
        {name: "Profile", path: "/profile"},
    ];

    return(
        <aside className="w-64 min-h-screen bg-slate-900 text-white p-5">
            <h1 className="text-2xl font-bold mb-10">
                TaskFlow
            </h1>

            <nav>
                <ul className="space-y-3">
                    {menuItems.map((item) =>(
                    <li key={item.path}>
                        <Link to={item.path}
                        className={`block px-4 py-3 rounded-lg ${location.pathname === item.path ? "bg-blue-600":"hover:bg-slate-800"}`}>
                            {item.name}
                        </Link>
                    </li>
                    ))}
                </ul>
            </nav>

            <button className="mt-10 w-full bg-red-500 py-2 rounded-lg hover:bg-red-600">
                    Logout
            </button>
        </aside>
    )
};

export default Sidebar;