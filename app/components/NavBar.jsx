"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white px-6 py-3 shadow-md md:flex md:items-center md:justify-between">
      {/* Logo and Menu Button */}
      <div className="flex w-full items-center justify-between bg-white md:w-auto">
        <Link href="/">
          <Image
            src="/logo.jpg"
            alt="Company Logo"
            width={60}
            height={60}
            className="cursor-pointer"
          />
        </Link>
        {/* Mobile Menu Toggle */}
        <button
          className="text-2xl md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Navigation Links */}
      <nav
        className={clsx(
          "max-w-3xl bg-white md:px-7",
          !isOpen && "hidden md:block",
        )}
      >
        <ul className="px-auto flex flex-col transition-all md:flex-row md:space-x-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="hover:text-primary block border-b-2 p-4 font-medium transition-all duration-200 ease-linear md:border-none"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Contact Button */}
      <button
        className={clsx(
          "g2 hover:g1 h-14 w-full rounded-md px-7 text-white transition-all duration-100 ease-linear hover:scale-105 md:ml-4 md:block md:w-fit",
          !isOpen && "hidden md:block",
        )}
        onClick={() => (window.location.href = "/contact")}
      >
        Contact Us
      </button>
    </header>
  );
};

export default NavBar;
