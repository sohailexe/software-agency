"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useSwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import clsx from "clsx";

const ClientSwiper = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const customers = [
    "c1.png",
    "c2.png",
    "c3.png",
    "c4.png",
    "c5.png",
    "c6.png",
    "c7.png",
  ];

  return (
    <div className="bg-light-200 shadow-box py-10">
      {/* Navigation buttons */}
      <div className="wrap1 relative">
        <div className="absolute -top-28 right-8 z-10 flex gap-4">
          <button
            onClick={() => swiperInstance?.slidePrev()}
            className="border-primary text-primary hover:bg-primary active:bg-primary size-9 rounded-full border-2 bg-white transition-colors duration-300 ease-in-out hover:border-transparent hover:text-white active:border-transparent active:text-white"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button
            onClick={() => swiperInstance?.slideNext()}
            className="border-primary text-primary hover:bg-primary active:bg-primary size-9 rounded-full border-2 bg-white transition-colors duration-300 ease-in-out hover:border-transparent hover:text-white active:border-transparent active:text-white"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>

      <Swiper
        onSwiper={setSwiperInstance}
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation, Pagination]} // Ensure Autoplay is in modules
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          300: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          600: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 7,
            spaceBetween: 30,
          },
        }}
      >
        {customers.map((customer, index) => (
          <SwiperSlide key={index}>
            <SlideContent customer={customer} index={index} />
          </SwiperSlide>
        ))}
        <div className="custom-pagination bottom-0 mx-auto transform text-center"></div>
      </Swiper>
    </div>
  );
};

const SlideContent = ({ customer, index }) => {
  const swiperSlide = useSwiperSlide();
  console.log(`Slide Index: ${index}, isActive: ${swiperSlide.isActive}`);

  return (
    <Image
      src={`/${customer}`}
      alt={`Client ${index + 1}`}
      width={200}
      height={200}
      className={clsx(
        "h-20 w-auto object-contain px-1 transition-all duration-300 ease-in-out",
        swiperSlide.isActive ? "scale-110 opacity-100" : "scale-90 opacity-60",
      )}
    />
  );
};

export default ClientSwiper;
