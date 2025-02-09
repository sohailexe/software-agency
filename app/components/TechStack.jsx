"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

const TechStack = () => {
  const [activeTab, setActiveTab] = useState("Backend");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="wrap1 bg-light-200 relative border-t py-20"
    >
      <motion.header
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative flex flex-col items-center overflow-hidden pb-12 text-center"
      >
        <motion.span
          initial={{ width: 0 }}
          animate={{ width: 60 }}
          transition={{ duration: 0.5 }}
          className="g1 mb-3 inline-block h-[4px] rounded-2xl"
        />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full whitespace-pre-line text-center first-line:font-light"
        >
          Our
          <br /> Tech Stack
        </motion.h1>
      </motion.header>

      <nav className="flex justify-center gap-0 md:gap-14">
        {[
          "Backend",
          "Frontend",
          "DevOps",
          "Mobile",
          "Data Science",
          "AI/ML",
        ].map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className="relative px-4 py-2 font-medium transition-colors hover:text-pink-600 md:text-lg"
          >
            {tab}
            {activeTab === tab && (
              <motion.span
                layoutId="underline"
                className="g4 absolute bottom-0 left-0 right-0 mx-auto block h-[3px] w-1/2 rounded-xl"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </nav>

      <div className="mt-14 md:px-36">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            {Data[activeTab]?.map((icon, index) => (
              <motion.div
                key={icon}
                variants={itemVariants}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer"
              >
                <Image
                  src={`/${icon}`}
                  alt={activeTab}
                  width={150}
                  height={150}
                  className="size-24 transition-opacity duration-300 hover:opacity-80 md:size-full"
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

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

export default TechStack;
