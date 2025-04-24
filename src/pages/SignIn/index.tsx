import React from "react";

const SignIn: React.FC = () => {
    return (
        <div className="flex justify-center min-h-screen items-center bg-gray-900 p-4">
            <div className="w-full max-w-md mx-auto px-10">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-white mb-2">Welcome back</h1>
                    <p className="text-gray-400">Sign in to your account</p>
                </div>

                <form className="space-y-6 ">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1 text-left">
                            Email address
                        </label>
                        <input
                            id="email"
                            type="email"
                            required
                            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 text-white placeholder-gray-500 transition"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1 text-left">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            required
                            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 text-white placeholder-gray-500 transition"
                            placeholder="••••••••"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-violet-600 focus:ring-violet-500 border-gray-700 rounded-full"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                                Remember me
                            </label>
                        </div>

                        <a href="#" className="text-sm text-violet-500 hover:text-violet-400">
                            Forgot password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-violet-600 hover:bg-violet-700 focus:ring-violet-500 focus:ring-offset-gray-900 text-white font-medium rounded-lg transition focus:outline-none focus:ring-2 focus:ring-offset-2"
                    >
                        Sign in
                    </button>
                </form>

                <div className="mt-6 text-sm text-gray-400">
                    Don't have an account?{" "}
                    <a href="#" className="text-violet-500 hover:text-violet-400">
                        Sign up
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SignIn;