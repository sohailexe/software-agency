// components/Footer.js
import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* First Column */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">About Us</h3>
            <p className="text-gray-600">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="mt-4">
              <Image
                src="/logo.jpg"
                alt="Logo"
                width={100}
                height={100}
                // className="mr-2 h-6 w-6"
              />
              <span className="text-gray-600">Company Name</span>
            </div>
          </div>

          {/* Second Column */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Case Studies
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  How it works
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Careers
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Areas We Serve
                </a>
              </li>
            </ul>
          </div>

          {/* Third Column */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <p className="text-gray-600">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p className="mt-2 text-gray-600">+923484287184</p>
            <div className="mt-4 flex items-center">
              <a href="#" className="mr-4 text-gray-600 hover:text-gray-900">
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.6..." />
                </svg>
              </a>
              <a href="#" className="mr-4 text-gray-600 hover:text-gray-900">
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12..." />
                </svg>
              </a>
              <a href="#" className="mr-4 text-gray-600 hover:text-gray-900">
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12..." />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12..." />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
