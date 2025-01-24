import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="fixed h-[75px] bottom-0 left-0 z-20 w-full p-4 bg-[#853ff9] border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <span className="text-sm text-white sm:text-center ">
        © 2023{" "}
        <Link to="/" className="hover:underline">
          Home Tuitor™
        </Link>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white  sm:mt-0">
        <li>
          <Link to="/about" className="mr-4 hover:underline md:mr-6">
            About
          </Link>
        </li>
        <li>
          <Link to="/policy" className="mr-4 hover:underline md:mr-6">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
