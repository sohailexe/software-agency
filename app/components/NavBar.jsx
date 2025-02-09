"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#1", label: "About Us" },
    { href: "#2", label: "Services" },
    { href: "#", label: "Contact Us" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white px-6 py-3 shadow-md md:flex md:items-center md:justify-between">
      {/* Logo and Menu Button */}
      <div className="flex w-full items-center justify-between bg-white md:w-auto">
        {/* Logo */}
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Image
              src="/logo.jpg"
              alt="Company Logo"
              width={60}
              height={60}
              className="cursor-pointer rounded-full"
            />
          </motion.div>
        </Link>
        {/* Mobile Menu Toggle */}
        <button
          className="text-3xl text-gray-700 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <span className="text-red-500">✖</span>
          ) : (
            <span className="text-indigo-600">☰</span>
          )}
        </button>
      </div>

      {/* Navigation Links */}
      <AnimatePresence>
        {isOpen && (
          <nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-4 flex flex-col space-y-4 overflow-hidden md:hidden"
          >
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-md px-4 py-3 font-medium text-gray-700 transition-all duration-300 hover:bg-indigo-50 hover:text-indigo-600"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </AnimatePresence>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex md:space-x-8">
        <ul className="flex space-x-8">
          {navItems.map((item) => (
            <motion.li
              key={item.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={AnimatePresence}
            >
              <Link
                href={item.href}
                className="rounded-md px-4 py-2 font-medium text-gray-700 transition-all duration-300 hover:bg-indigo-50 hover:text-indigo-600"
              >
                {item.label}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Contact Button */}
      <motion.button
        className={clsx(
          "g2 mt-4 w-full rounded-md bg-gradient-to-r px-6 py-3 text-white transition-all duration-300 hover:shadow-lg md:ml-4 md:mt-0 md:w-fit",
          !isOpen && "hidden md:block",
        )}
        onClick={() => (window.location.href = "/#3")}
      >
        Contact Us
      </motion.button>
    </header>
  );
};

export default NavBar;
