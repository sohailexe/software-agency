import Link from "next/link";
import Image from "next/image";
import { Fullscreen } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const CaseStudies = () => {
  return (
    <section className="wrap1 bg-light-200 relative border-b !px-0 py-32">
      <Image
        className="absolute -top-28 left-10 z-10 hidden md:block"
        src="/arrow.png"
        alt="arrow"
        height={250}
        width={250}
      />
      <Image
        className="absolute -top-28 right-10 z-10 hidden rotate-[50deg] scale-[-1] md:block"
        src="/arrow.png"
        alt="arrow"
        height={250}
        width={250}
      />
      <header className="relative flex flex-col items-center overflow-hidden pb-20 text-center">
        <span className="g1 bg-primary mb-3 inline-block h-[4px] w-[60px] rounded-2xl"></span>
        <h1 className="w-full whitespace-pre-line text-center text-4xl first-line:font-light">
          Our Client <br /> Case Studies
        </h1>
      </header>
      <div className="flex flex-col gap-8">
        {caseStudiesData.map((study, index) => (
          <div
            key={index}
            style={{ backgroundColor: study.background }}
            className="flex flex-col gap-8 rounded-xl border shadow-md md:flex-row"
          >
            {/* Image Section */}
            <div className="relative h-64 w-full md:h-auto md:w-1/2">
              <Image
                className="h-full w-full rounded-md object-cover"
                src={study.image}
                alt={study.title}
                fill // Automatically fills the parent container
                sizes="(max-width: 768px) 100vw, 50vw" // Responsive sizing
              />
            </div>

            {/* Content Section */}
            <div className="flex-1 px-6 py-8">
              <h2 className="mb-4">{study.title}</h2>
              <p className="mb-6">{study.description}</p>

              <Link
                href={study.link}
                className="gradientText group float-end mt-6 flex items-center gap-2 font-medium"
              >
                Read More
                <span className="gradientText text-[20px] transition-transform duration-200 group-hover:translate-x-1">
                  {" "}
                  {">"}{" "}
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const caseStudiesData = [
  {
    title: "Website Design for SCFC Canada",
    description:
      "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
    link: "#",
    image: "/case1.png",
    background: "#F1F2FF",
  },
  {
    title: "Website Design for SCFC Canada",
    description:
      "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
    link: "#",
    image: "/case2.png",
    background: "#F0FFF7",
  },
  {
    title: "Website Design for SCFC Canada",
    description:
      "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
    link: "#",
    image: "/case3.png",
    background: "#FFF4F4",
  },
];

export default CaseStudies;
