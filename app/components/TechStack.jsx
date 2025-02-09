"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";

const TechStack = () => {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="wrap1 bg-light-200 relative border-t py-20">
      <header className="relative flex flex-col items-center overflow-hidden pb-12 text-center">
        <span className="g1 bg-primary mb-3 inline-block h-[4px] w-[60px] rounded-2xl"></span>
        <h1 className="w-full whitespace-pre-line text-center text-4xl first-line:font-light">
          Our
          <br /> Tech Stack
        </h1>
      </header>

      <nav className="flex justify-center gap-14">
        {[
          "Backend",
          "Frontend",
          "DevOps",
          "Mobile",
          "Data Science",
          "AI/ML",
        ].map((tab, index) => (
          <button
            key={index}
            className={`hover:gradientText relative before:absolute before:bottom-0 before:left-1/2 before:h-[3px] before:w-1/2 before:-translate-x-1/2 before:transform before:content-[''] ${
              activeTab === tab
                ? "before:g4 gradientText"
                : "before:bg-transparent"
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>

      <div className="mt-14 px-36">
        <div className="flex flex-wrap items-center justify-center gap-6">
          {Data[activeTab]?.map((icon, index) => (
            <Image
              key={index}
              src={`/${icon}`}
              alt={activeTab}
              width={150}
              height={150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

const Data = {
  Backend: [
    "bk1.png",
    "bk2.png",
    "bk3.png",
    "bk4.png",
    "bk5.png",
    "bk6.png",
    "bk7.png",
  ],
  Frontend: ["bk1.png", "bk2.png", "bk3.png", "bk4.png", "bk5.png", "bk6.png"],
};
