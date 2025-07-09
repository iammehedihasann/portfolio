// import {Link} from "react-router-dom"

// function Navbar () {
//  return (
//     <>
//     <div className="flex justify-between items-center  bg-gray-900 text-white p-4 md:w-full  mx-auto ">
//       <h1 className="text-3xl font-bold flex items-center"><Link to="/">PortFolio.</Link></h1>

//        <nav className=" text-white justify-center mx-4 md:flex lg:flex  ">
//           <ul className="flex space-x-6 font-semibold text-lg">
//             <li className="hover:text-gray-500"><Link to="/">Home</Link></li>
//             <li className="hover:text-gray-500"><Link to="about">About</Link></li>
//             <li className="hover:text-gray-500"><Link to="projects">Projects</Link></li>
//             <li className="hover:text-gray-500"><Link to="contact">Contact</Link></li>
//             <li className="hover:text-gray-500"><Link to="resume">Resume</Link></li>
//           </ul>
     
//         </nav>
//     </div>
    
//     </>
//  )
// }
// export  default Navbar;


import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-gray-900 text-white px-4 py-3">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          {/* Logo */}
          <h1 className="text-3xl font-bold">
            <Link to="/">PortFolio.</Link>
          </h1>

          {/* Hamburger button (mobile only) */}
          <button
            className="md:hidden text-white focus:outline-none "
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Navigation Menu */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-6 font-semibold text-lg">
              <li className="hover:text-gray-400">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-gray-400">
                <Link to="about">About</Link>
              </li>
              <li className="hover:text-gray-400">
                <Link to="projects">Projects</Link>
              </li>
              <li className="hover:text-gray-400">
                <Link to="contact">Contact</Link>
              </li>
              <li className="hover:text-gray-400">
                <Link to="resume">Resume</Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden mt-2">
            <ul className="flex flex-col space-y-2 text-center font-medium text-lg">
              <li className="hover:text-gray-400">
                <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
              </li>
              <li className="hover:text-gray-400">
                <Link to="about" onClick={() => setIsOpen(false)}>About</Link>
              </li>
              <li className="hover:text-gray-400">
                <Link to="projects" onClick={() => setIsOpen(false)}>Projects</Link>
              </li>
              <li className="hover:text-gray-400">
                <Link to="contact" onClick={() => setIsOpen(false)}>Contact</Link>
              </li>
              <li className="hover:text-gray-400">
                <Link to="resume" onClick={() => setIsOpen(false)}>Resume</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
