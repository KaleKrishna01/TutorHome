import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const [userLoggedIn, setUserLoggedIn] = useState(true);
  const [menu, setMenu] = useState(false);

  const navTab =
    "block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#000] md:p-0 dark:text-white md:dark:hover:text-[#000]";

  const navTabActive =
    "block py-2 pl-3 pr-4 text-[#000] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#000] md:p-0 dark:text-white md:dark:hover:text-[#000]";

  return (
    <>
      <nav className="fixed w-[100vw] h-[75px] bg-[#853ff9] border-gray-200 z-50 dark:bg-gray-900 shadow-lg">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Home Tutor
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden focus:outline-none "
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => setMenu(!menu)}
          >
            {menu ? (
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
                color="#fff"
                viewBox="0 0 16 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 4L12 12M12 4L4 12"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
                color="#fff"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            )}
          </button>

          {/* Responsive tabs */}
          {menu && (
            <div className="flex md:hidden h-full w-full bg-[#853ff9]">
              <ul className="bg-[#853ff9]">
                <li>
                  <NavLink
                    to="/"
                    className={
                      location.pathname === "/" ? navTabActive : navTab
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services"
                    className={
                      location.pathname === "/services" ? navTabActive : navTab
                    }
                  >
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blog"
                    className={
                      location.pathname === "/blog" ? navTabActive : navTab
                    }
                  >
                    Blogs
                  </NavLink>
                </li>
              </ul>
            </div>
          )}

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="bg-[#853ff9] font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <NavLink
                  to="/"
                  className={location.pathname === "/" ? navTabActive : navTab}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={
                    location.pathname === "/services" ? navTabActive : navTab
                  }
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={
                    location.pathname === "/blog" ? navTabActive : navTab
                  }
                >
                  Blogs
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
