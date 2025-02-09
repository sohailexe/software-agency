import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Fullscreen } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Procedure = () => {
  return (
    <section className="wrap1 relative border-b !px-0 py-20">
      <header className="relative flex flex-col items-center overflow-hidden pb-20 text-center">
        <span className="g1 bg-primary mb-3 inline-block h-[4px] w-[60px] rounded-2xl"></span>
        <h1 className="w-full whitespace-pre-line text-center text-4xl first-line:font-light">
          Way of building <br /> Great Software
        </h1>
      </header>
      <div className="flex flex-col gap-16">
        {caseStudiesData.map((study, index) => {
          let imgRight = index % 2 === 0;
          return (
            <div
              key={index}
              className={clsx("flex flex-col gap-8 rounded-xl md:flex-row", {
                "md:flex-row-reverse": imgRight,
              })}
            >
              {/* Image Section */}
              <div className="relative h-64 w-full md:h-auto md:w-1/2">
                <Image
                  className="h-full w-full rounded-md object-cover"
                  src={study.image}
                  alt={study.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Content Section */}
              <div className="flex-1 px-6 py-8">
                <h2 className="mb-4">{study.title}</h2>
                <p className="mb-3">{study.description}</p>
                <p className="mb-6">
                  {study.keyPoint.text
                    .split(study.keyPoint.linkText)
                    .map((part, index, array) =>
                      index === array.length - 1 ? (
                        part
                      ) : (
                        <React.Fragment key={index}>
                          {part}
                          <Link
                            href={study.keyPoint.linkUrl}
                            className="gradientText transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                          >
                            {study.keyPoint.linkText}
                          </Link>
                        </React.Fragment>
                      ),
                    )}
                </p>

                <figure className="space-y-6">
                  <blockquote className="text-lg font-medium leading-8">
                    <p className="gradientText before:content-['“'] after:content-['”']">
                      <span className="g3 float-start mr-3 inline-block h-16 translate-y-1 p-[3px]">
                        {" "}
                      </span>
                      {study.testimonial.quote}
                    </p>
                  </blockquote>

                  <figcaption className="flex items-center gap-x-4 not-italic">
                    <Avatar className="size-16">
                      <AvatarImage
                        src={study.testimonial.author.imageUrl}
                        alt={`Portrait of ${study.testimonial.author.name}`}
                      />
                      <AvatarFallback>
                        {study.testimonial.author.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div className="space-y-1">
                      <div className="text-foreground font-semibold">
                        {study.testimonial.author.name}
                      </div>
                      <div className="text-muted-foreground text-sm">
                        {study.testimonial.author.designation}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const caseStudiesData = [
  {
    title: "Build the right team to scale",
    description:
      "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers).",
    keyPoint: {
      text: "Our delivery model helps you cut costs and deliver within budget.",
      linkText: "delivery model",
      linkUrl: "#",
    },
    link: "#",
    image: "/p1.png",
    testimonial: {
      quote:
        "Their scalable solution helped us handle a 200% increase in traffic without any downtime.",
      author: {
        name: "Michael Brown",
        designation: "Product Manager",
        imageUrl: "/profile.png",
      },
    },
  },
  {
    title: "Build the right team to scale",
    description:
      "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers).",
    keyPoint: {
      text: "Our delivery model helps you cut costs and deliver within budget.",
      linkText: "delivery model",
      linkUrl: "#",
    },
    link: "#",
    image: "/p2.png",
    testimonial: {
      quote:
        "Their scalable solution helped us handle a 200% increase in traffic without any downtime.",
      author: {
        name: "Michael Brown",
        designation: "Product Manager",
        imageUrl: "/profile.png",
      },
    },
  },
  {
    title: "Build the right team to scale",
    description:
      "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers).",
    keyPoint: {
      text: "Our delivery model helps you cut costs and deliver within budget.",
      linkText: "delivery model",
      linkUrl: "#",
    },
    link: "#",
    image: "/p3.png",
    testimonial: {
      quote:
        "Their scalable solution helped us handle a 200% increase in traffic without any downtime.",
      author: {
        name: "Michael Brown",
        designation: "Product Manager",
        imageUrl: "/profile.png",
      },
    },
  },
];

export default Procedure;
