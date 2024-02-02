import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaCaretDown } from 'react-icons/fa';

function AdainNavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState('');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleNavbarToggle = () => {
    setNavbar(!navbar);
  };

  const handleNavItemClick = (navItem) => {
    setActiveNavItem(navItem);
    setNavbar(false);
  };

  return (
    <nav className="transition-opacity duration-500 w-full top-0 h-25 shadow-lg fixed lg:mb-8 bg-adainwhite backdrop-blur-3xl hover:bg-adainyellow opacity-100 z-50 hover:bg-avista2">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="assets/sky.png" className="h-8" alt="Flowbite Logo" />
        </NavLink>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={handleNavbarToggle}
        >
          <span className="sr-only">Open main menu</span>
          <FaCaretDown className="w-5 h-5" />
        </button>
        <div className={`w-full md:block md:w-auto ${navbar ? 'block' : 'hidden'}`} id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={() => handleNavItemClick('Home')}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/job"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={() => handleNavItemClick('Home')}
              >
                Job
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={() => handleNavItemClick('Home')}
              >
                Contact
              </NavLink>
            </li>

            <li>
              <div className="relative">
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  onClick={toggleDropdown}
                >
                  Product and services
                  <FaCaretDown className="w-2.5 h-2.5 ms-2.5" />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 py-2 w-48 bg-adainwhite border border-gray-200 rounded-lg shadow-md dark:bg-gray-700 dark:border-gray-600">
                    <NavLink
                      to="/purewater"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-400 hover:bg-adainyellow dark:hover:bg-adainyellow dark:hover:text-white"
                      onClick={() => handleNavItemClick('Dashboard')}
                    >
                      SkyWater
                    </NavLink>
                    <NavLink
                      to="/printing"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-400 hover:bg-adainyellow dark:hover:bg-adainyellow dark:hover:text-white"
                      onClick={() => handleNavItemClick('Settings')}
                    >
                      SkyPrinting
                    </NavLink>
                    <NavLink
                      to=""
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-400 hover:bg-adainyellow dark:hover:bg-adainyellow dark:hover:text-white"
                      onClick={() => handleNavItemClick('Earnings')}
                    >
                      SkyBread
                    </NavLink>
                  </div>
                )}
              </div>
            </li>
            {/* Add other navigation items as needed */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default AdainNavBar;
