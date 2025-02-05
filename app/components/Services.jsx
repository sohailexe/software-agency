"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Add autoplay CSS

export default () => {
  const services = [
    {
      title: "Mobile App Development",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
      icon: "📱",
    },
    {
      title: "Web Design & Development",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
      icon: "💻",
    },
    {
      title: "Software Testing Service",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
      icon: "🧪",
    },
    {
      title: "Software Testing Service",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
      icon: "🧪",
    },
    {
      title: "Software Testing Service",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
      icon: "🧪",
    },
    {
      title: "Software Testing Service",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
      icon: "🧪",
    },
  ];
  return (
    <section className="py-5 bg-light-200 shadow-lg">
      <h1 className="text-center">Services we offer</h1>
      <Swiper
        className="my-6 px-2 custom-swiper"
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        autoplay={{
          delay: 5000, // 5 seconds
          pauseOnMouseEnter: true, // Pause on hover
          waitForTransition: true, // Wait for transition to complete
          stopOnLastSlide: false, // Continue looping
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1024: {
            slidesPerView: 3,
            on: {
              slideChange: (swiper) => {
                swiper.slides.forEach((slide) => {
                  slide.querySelector("h2").classList.remove("text-red-500");
                });
                swiper.slides[swiper.activeIndex]
                  .querySelector("h2")
                  .classList.add("text-red-500");
              },
            },
          },
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide
            key={index}
            className="rounded-md before1 px-5 w-[350px] my-1 mx-1 transition-all duration-300 py-7 shadow-xl"
          >
            <div className="size-16 rounded-full g3 bg-primary-500 text-white">
              <Image
                className="p1 rounded-full size-16 p-[1px] "
                src={"/logo.jpg"}
                alt="logo"
                width={50}
                height={50}
              />
            </div>
            <h2 className="text-left mt-4">{service.title}</h2>
            <p className="text-left  mt-4">{service.description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
