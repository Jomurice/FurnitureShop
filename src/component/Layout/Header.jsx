import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-white shadow-md w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center h-16 justify-between">
                    <div className="flex-shrink-0">
                        <Link to="/">
                            <img className="h-20 w-auto" src="./furniture.png" alt="Logo" />
                        </Link>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full max-w-xs px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <nav className="flex space-x-8">
                        <Link
                            to="/"
                            className="text-gray-700 hover:text-gray-900 font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            to="/products"
                            className="text-gray-700 hover:text-gray-900 font-medium"
                        >
                            Product
                        </Link>
                        <Link className="text-gray-700 hover:text-gray-900 font-medium">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                />
                            </svg>
                        </Link>
                        <Link className="text-gray-700 hover:text-gray-900 font-medium">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                                />
                            </svg>


                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
