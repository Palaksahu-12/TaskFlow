import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({children}) =>{
    return(
        <div className="flex min-h-screen bg-slate-100 w-full">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Navbar />
                <main className="flex-1 p-6 lg:p-8 overflow-y-auto w-full">
                    {children}
                </main>
            </div>
        </div>
    )
};

export default Layout;