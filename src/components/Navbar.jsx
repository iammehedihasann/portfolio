// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@mui/material";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Add subtle shadow + blur when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
    { name: "Resume", path: "/resume" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gray-900/90 backdrop-blur-lg shadow-2xl shadow-blue-500/10 border-b border-blue-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-3xl md:text-4xl font-extrabold tracking-tight"
          >
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent hover:from-cyan-400 hover:to-blue-400 transition-all duration-500">
              Mehedi.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-5 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? "text-blue-400 bg-blue-500/10"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
                {/* Active Indicator */}
                {isActive(item.path) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-blue-500 rounded-full"></span>
                )}
              </Link>
            ))}

            {/* Optional: Hire Me Button */}
            <Button
              variant="contained"
              href="#contact"
              className="!ml-6 !bg-blue-600 hover:!bg-blue-700 !text-white !font-semibold !px-6 !py-3 !rounded-full !shadow-lg hover:!shadow-blue-500/50 transition-all duration-300"
            >
              Hire Me
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none p-2 rounded-lg hover:bg-gray-800/50 transition"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <nav className="md:hidden mt-6 pb-6 border-t border-gray-700/50">
            <div className="flex flex-col space-y-3 mt-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`py-4 px-6 rounded-xl text-lg font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? "text-blue-400 bg-blue-500/10 border border-blue-500/30"
                      : "text-gray-300 hover:text-white hover:bg-gray-800/70"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                fullWidth
                variant="contained"
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="!mt-4 !bg-blue-600 hover:!bg-blue-700 !text-white !font-bold !py-4 !rounded-xl"
              >
                Hire Me
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
