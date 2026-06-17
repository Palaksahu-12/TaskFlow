import {Link} from "react-router-dom";

const Login = () => {
    return(
        <div className = "min-h-screen flex items-center justify-center bg-slate-100">
            <div className ="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                <h1 className ="text-3xl font-bold text-center text-blue-600 mb-2">
                    TaskFlow
                </h1>
                <p className ="text-center text-gray-500 mb-6">
                    Sign in to your account
                </p>
                <form className ="space-y-4">

                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Email
                        </label>
                        <input 
                            type="email"
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                    </div>

                    <div className="text-right">
                        <button
                            type="button"
                            className="text-sm text-blue-600 hover:underline"
                        >
                            Forgot Password?
                        </button>
                    </div>

                    <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                        Login
                    </button>
                </form>

                <p className="text-center mt-6 text-gray-600">
                    Don't have an account?{""}
                    <Link
                    to="/register" 
                    className="text-blue-600 font-medium hover:underline">
                    Register</Link>
                </p>
            </div>
        </div>
    )
}

export default Login;