"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
  hover: {
    y: -4,
    scale: 1.01,
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.01)",
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const iconVariants = {
  hover: {
    rotate: [0, -5, 5, 0],
    // scale: 1,
    transition: { duration: 0.4 },
  },
};

const contentVariants = {
  hover: {
    x: 5,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const DevApproach = () => {
  return (
    <section className="wrap1 relative bg-[#F7F7FA] py-20">
      <header className="relative flex flex-col items-center overflow-hidden pb-20 text-center">
        <span className="g1 bg-primary mb-3 inline-block h-[4px] w-[60px] rounded-2xl"></span>
        <h1 className="w-full whitespace-pre-line text-center text-4xl first-line:font-light">
          Our design and <br /> development approach
        </h1>
      </header>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {caseStudiesData.map((study, index) => (
          <motion.div
            key={index}
            className="border-light flex cursor-pointer gap-5 rounded-xl border bg-[#FAFAFA] px-3 py-12"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <motion.div
              className={clsx(
                "mt-2 flex size-16 items-center justify-center rounded-lg p-3",
                study.bgClasses || "bg-black",
              )}
              variants={iconVariants}
            >
              <Image
                src={study.icon}
                alt="rocket"
                height={250}
                width={250}
                className="object-contain"
              />
            </motion.div>

            <motion.div className="flex-1" variants={contentVariants}>
              <motion.h2
                className="mb-2 font-semibold"
                whileHover={{ color: "#4F46E5" }}
              >
                {study.heading}
              </motion.h2>
              <motion.p
                className="para2"
                initial={{ opacity: 0.9 }}
                whileHover={{ opacity: 1 }}
              >
                {study.description}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DevApproach;

const caseStudiesData = [
  {
    heading: "UX Driven Engineering",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code",
    icon: "/ap1.png",
    bgClasses: "bg-[#27272E]",
  },
  {
    heading: "UX Driven Engineering",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code",
    icon: "/ap2.png",
    bgClasses: "bg-gradient-to-tr from-[#509CF5] to-[#68DBF2]",
  },
  {
    heading: "UX Driven Engineering",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code",
    icon: "/ap3.png",
    bgClasses: "bg-gradient-to-r from-[#FF3D9A] to-[#FF92AE]",
  },
  {
    heading: "UX Driven Engineering",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code",
    icon: "/ap4.png",
    bgClasses: "bg-gradient-to-r from-[#24E795] to-[#67E9F1]",
  },
  {
    heading: "UX Driven Engineering",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code",
    icon: "/ap5.png",
    bgClasses: "bg-gradient-to-tr from-[#F7936F] to-[#FFEF5E]",
  },
  {
    heading: "UX Driven Engineering",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code",
    icon: "/ap6.png",
    bgClasses: "bg-gradient-to-tr from-[#57007B] to-[#F76680]",
  },
];
