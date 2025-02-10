import React from "react";
import Link from "next/link";
const FeaturedResources = () => {
  return (
    <section className="relative py-20">
      <header className="relative flex flex-col items-center overflow-hidden pb-20 text-center">
        <span className="g1 bg-primary mb-3 inline-block h-[4px] w-[60px] rounded-2xl"></span>
        <h1 className="w-full whitespace-pre-line text-center text-4xl first-line:font-light">
          Featured <br /> Resources
        </h1>
      </header>

      <div className="flex gap-6">
        {Resources.map((resource, index) => (
          <div
            key={index}
            className="shadow-box flex flex-col gap-6 rounded-xl overflow-hidden"
          >
            <img
              src={`/${resource.image}`}
              alt=""
              className="h-[200px] rounded-t-xl object-cover"
            />
            <div className="flex flex-col gap-6 p-6">
              <p className="">{resource.paragraph}</p>

              <div>
                <Link
                  href="/"
                  className="gradientText group float-end mr-7 flex items-center gap-2 font-medium"
                >
                  Read More
                  <span className="gradientText text-[20px] transition-transform duration-200 group-hover:translate-x-1">
                    {" "}
                    {">"}{" "}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedResources;

const Resources = [
  {
    image: "fr1.png",
    paragraph:
      "How to Build a Scalable Application up to 1 Million Users on AWS",
  },
  {
    image: "fr2.png",
    paragraph:
      "How to Build a Scalable Application up to 1 Million Users on AWS",
  },
  {
    image: "fr3.png",
    paragraph:
      "How to Build a Scalable Application up to 1 Million Users on AWS",
  },
  {
    image: "fr4.png",
    paragraph:
      "How to Build a Scalable Application up to 1 Million Users on AWS",
  },
  {
    image: "fr2.png",
    paragraph:
      "How to Build a Scalable Application up to 1 Million Users on AWS",
  },
];
