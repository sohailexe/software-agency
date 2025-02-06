"use client";
import { useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useSwiperSlide } from "swiper/react";
import Image from "next/image";
import clsx from "clsx";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion, AnimatePresence } from "framer-motion"; // Add this import
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Romeena De Silva",
    role: "Jomet Cosmetics",
    image: "/user1.jpg", // Replace with your actual image path
    rating: 2,
    comment:
      "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
  },
  {
    name: "Romeena De Silva",
    role: "Jomet Cosmetics",
    image: "/user2.jpg",
    comment:
      "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
    rating: 5,
  },
  {
    name: "Imran Khan",
    role: "Software Engineer",
    image: "/user3.jpg",
    comment:
      "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
    rating: 5,
  },
  {
    name: "Romeena De Silva",
    role: "Jomet Cosmetics",
    comment:
      "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
    image: "/user4.jpg",
    rating: 5,
  },
  {
    name: "Romeena De Silva",
    role: "Jomet Cosmetics",
    comment:
      "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
    image: "/user5.jpg",
    rating: 5,
  },
];

const Testimonials = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  const handleSlideChange = useCallback((swiper) => {
    setActiveIndex(swiper.realIndex);
    // Determine swipe direction
    setDirection(swiper.activeIndex > swiper.previousIndex ? "right" : "left");
  }, []);

  // Animation variants
  const textVariants = {
    initial: (dir) => ({
      opacity: 0,
      x: dir === "right" ? 100 : -100,
      scale: 0.8,
      rotate: dir === "right" ? 5 : -5,
    }),
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        delay: 0.1,
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
    exit: (dir) => ({
      opacity: 0,
      x: dir === "right" ? -100 : 100,
      scale: 0.8,
      rotate: dir === "right" ? -5 : 5,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <section className="py-12">
      <div className="wrap1 relative flex flex-col items-center overflow-hidden text-center">
        <span className="g1 mb-3 inline-block h-[4px] w-[60px] rounded-2xl"></span>

        <h1 className="w-full whitespace-pre-line first-line:font-light">
          Meet the People <br /> We are Working With
        </h1>
        {/* Testimonial Text */}
        <div className="relative pt-12">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.p
              key={activeIndex}
              custom={direction}
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="max-w-[535px] px-14 text-center md:px-6"
            >
              <Image
                className="absolute left-6 md:-left-9"
                src="/comma.png"
                width={12}
                height={12}
                alt="Quote"
              />
              {testimonials[activeIndex]?.comment}
              <Image
                className="absolute bottom-0 right-0 -translate-x-8 -translate-y-5 scale-x-[-1] transform md:translate-x-0 md:translate-y-0"
                src="/comma.png"
                width={12}
                height={12}
                alt="Quote"
              />
            </motion.p>
          </AnimatePresence>
        </div>
        <button
          onClick={() => swiperInstance?.slidePrev()}
          className="border-primary text-primary hover:bg-primary absolute left-3 top-[60%] size-12 rounded-full border-2 bg-white shadow-lg transition-all duration-300 hover:border-transparent hover:text-white"
          aria-label="Previous testimonial"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button
          onClick={() => swiperInstance?.slideNext()}
          className="border-primary text-primary hover:bg-primary absolute right-3 top-[60%] size-12 rounded-full border-2 bg-white shadow-lg transition-all duration-300 hover:border-transparent hover:text-white"
          aria-label="Next testimonial"
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>

      <Swiper
        onSwiper={setSwiperInstance}
        onSlideChange={handleSlideChange}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="testimonial-swiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

const TestimonialCard = ({ testimonial }) => {
  const swiperSlide = useSwiperSlide();

  return (
    <div
      className={clsx(
        "rounded-xl bg-white p-6 shadow-none transition-all duration-300",
        {
          "shadow-box scale-100 opacity-100": swiperSlide.isActive,
          "scale-90 opacity-60": swiperSlide.isPrev || swiperSlide.isNext,
          "opacity-0":
            !swiperSlide.isActive && !swiperSlide.isPrev && !swiperSlide.isNext,
        },
      )}
    >
      <div className="flex flex-col items-center text-center">
        {/* User Image */}
        <Avatar className="mb-4 size-16">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback></AvatarFallback>
        </Avatar>

        {/* Rating */}
        <div className="text-primary mb-3 flex gap-1">
          {[...Array(5)].map((_, i) => (
            <FontAwesomeIcon
              key={i}
              icon={faStar}
              className={clsx(
                "text-sm",
                i < testimonial.rating ? "opacity-100" : "opacity-30",
              )}
            />
          ))}
        </div>

        {/* User Info */}
        <h4 className="mb-1 text-lg font-semibold">{testimonial.name}</h4>
        <p className="text-sm text-gray-500">{testimonial.role}</p>
      </div>
    </div>
  );
};

export default Testimonials;
