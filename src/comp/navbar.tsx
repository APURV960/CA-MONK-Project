import * as React from "react";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-800 bg-gray-900/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-2">
            <h1 className="text-white font-bold text-2xl">Blog App</h1>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              Blogs
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
