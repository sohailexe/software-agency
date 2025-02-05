import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="relative mx-auto flex flex-col-reverse justify-center gap-3 overflow-hidden px-5 py-10 shadow-md md:flex-row md:px-14 md:py-20 md:pb-28">
      <div className="pt-10 text-center md:max-w-[500px] md:text-left">
        <h1 className="text-[45px] font-light leading-[71px]">
          Great <span className="gradientText font-bold">Product</span> is{" "}
          <span className="md:overflow-x-auto md:whitespace-nowrap">
            <span className="text-[53px] font-extrabold"> built by great</span>
            <span className="gradientText text-[53px] font-extrabold">
              {" "}
              teams
            </span>
          </span>
        </h1>
        <p className="para1 mt-5">
          We help build and manage a team of world-class developers to your
          vision to life
        </p>
        <button className="bg-primary mt-9 h-14 w-full rounded-md px-7 text-white transition-all duration-100 ease-linear hover:scale-105 hover:shadow-xl md:block md:w-fit">
          Let's get started
        </button>
      </div>
      <div className="flex justify-center md:justify-end">
        <Image src="/hero.png" alt="Hero Image" width={500} height={300} />
      </div>
      <span className="g3 absolute bottom-0 h-12 w-12 translate-x-[277px] translate-y-4 rounded-full bg-slate-700 p-0"></span>
    </section>
  );
};
export default Hero;
