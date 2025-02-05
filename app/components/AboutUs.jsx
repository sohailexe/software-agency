import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const AboutUs = () => {
  return (
    <section className=" wrap1 py-24 flex items-center justify-between relative overflow-hidden gap-8">
      <span className="g3 absolute top-0 left-[11rem] h-12 w-12  -translate-y-4 rounded-full bg-slate-700 p-0"></span>

      <div className="flex-1 pr-4 ">
        <span className="w-[60px] h-[4px] g1 inline-block rounded-2xl -translate-y-3 "></span>
        <h1 className=" first-line:font-light">
          Leading companies trust us to develop softwares
        </h1>
        <p className="para1 mt-5">
          With over{" "}
          <span className="gradientText">25 years of industry experience</span>,
          we empower your tech teams by not only assembling skilled development
          units but also by ensuring success at every stage of the project
          lifecycle. As a premier custom software development firm, our
          commitment to excellence drives innovation and delivers outstanding
          results.
        </p>
        <Link
          href="#"
          className="text-[#57007B] text-[16px] mt-6 font-medium flex items-center gap-2 transition-all duration-300 hover:gap-3"
        >
          See more Information
          <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: 24 }} />
        </Link>
      </div>
      <div className="flex-1">
        <Image
          src="/aboutUs.png"
          alt="Team collaborating on innovative software solutions"
          width={500}
          height={300}
          className="rounded-md shadow-md"
        />
      </div>
    </section>
  );
};

export default AboutUs;
