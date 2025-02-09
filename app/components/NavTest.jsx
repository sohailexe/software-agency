"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="cursor-pointer bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-xl font-bold text-transparent">
                MyBrand
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden space-x-6 md:flex">
            <Link href="/">
              <span className="cursor-pointer text-gray-700 transition duration-300 hover:text-indigo-600">
                Home
              </span>
            </Link>
            <Link href="/about">
              <span className="cursor-pointer text-gray-700 transition duration-300 hover:text-indigo-600">
                About
              </span>
            </Link>
            <Link href="/services">
              <span className="cursor-pointer text-gray-700 transition duration-300 hover:text-indigo-600">
                Services
              </span>
            </Link>
            <Link href="/contact">
              <span className="cursor-pointer text-gray-700 transition duration-300 hover:text-indigo-600">
                Contact
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-indigo-600 focus:text-indigo-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-2 bg-white shadow-lg md:hidden"
          >
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link href="/">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="block cursor-pointer rounded-md px-3 py-2 text-base font-medium text-gray-700 transition duration-300 hover:bg-gray-50 hover:text-indigo-600"
                >
                  Home
                </motion.span>
              </Link>
              <Link href="/about">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="block cursor-pointer rounded-md px-3 py-2 text-base font-medium text-gray-700 transition duration-300 hover:bg-gray-50 hover:text-indigo-600"
                >
                  About
                </motion.span>
              </Link>
              <Link href="/services">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="block cursor-pointer rounded-md px-3 py-2 text-base font-medium text-gray-700 transition duration-300 hover:bg-gray-50 hover:text-indigo-600"
                >
                  Services
                </motion.span>
              </Link>
              <Link href="/contact">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="block cursor-pointer rounded-md px-3 py-2 text-base font-medium text-gray-700 transition duration-300 hover:bg-gray-50 hover:text-indigo-600"
                >
                  Contact
                </motion.span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
