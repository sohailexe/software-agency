import React from "react";

const DevProcess = () => {
  // Dynamic data array
  const processSteps = [
    {
      id: 1,
      number: "#1",
      title: "Assemble the right team",
      description:
        "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.",
      connectorPosition: "bottom",
    },
    {
      id: 2,
      number: "#2",
      title: "Sprint planning",
      description:
        "We break down complex products into iterations and create clear development roadmaps.",
      connectorPosition: "bottom",
    },
    {
      id: 3,
      number: "#3",
      title: "Agile development",
      description:
        "We implement true agile processes with bi-weekly sprints and continuous deployments.",
      connectorPosition: "bottom",
    },
    {
      id: 4,
      number: "#4",
      title: "Quality assurance",
      description:
        "Our rigorous testing process ensures bug-free releases and product excellence.",
      connectorPosition: "top",
    },
    {
      id: 5,
      number: "#5",
      title: "Ongoing support",
      description:
        "We provide maintenance and support packages to keep your product up-to-date.",
      connectorPosition: "top",
    },
    {
      id: 6,
      number: "#6",
      title: "Scalability planning",
      description:
        "We build products with future growth and scalability in mind from day one.",
      connectorPosition: "top",
    },
  ];

  // Split the array into two groups for layout
  const firstGroup = processSteps.slice(0, 3);
  const secondGroup = processSteps.slice(3);

  return (
    <section className="wrap1 relative py-20">
      <header className="relative flex flex-col items-center overflow-hidden pb-20 text-center">
        <span className="g1 bg-primary mb-3 inline-block h-[4px] w-[60px] rounded-2xl"></span>
        <h1 className="w-full whitespace-pre-line text-center text-4xl first-line:font-light">
          How development <br /> through Alcaline works
        </h1>
      </header>

      <div>
        {/* First group of cards */}
        <div className="grid -translate-x-6 grid-cols-3 gap-16">
          {firstGroup.map((step) => (
            <div key={step.id} className="relative rounded-xl border p-6">
              <header className="mb-3">
                <span className="gradientText float-left mr-2 text-2xl font-bold">
                  {step.number}
                </span>
                <h2>{step.title}</h2>
              </header>
              <p>{step.description}</p>
              <span className="g3 absolute bottom-0 left-0 right-0 mx-auto h-14 w-[2px] translate-y-[100%]">
                <div className="relative mx-auto"></div>
                <span className="g3 absolute bottom-0 mx-auto size-2 -translate-x-[35%] rounded-full"></span>
              </span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mb-0.5 py-12">
          <div className="g3 z-10 mt-0.5 rounded-2xl py-[1px]"></div>
        </div>

        {/* Second group of cards */}
        <div className="grid translate-x-6 grid-cols-3 gap-16">
          {secondGroup.map((step) => (
            <div key={step.id} className="relative rounded-xl border p-6">
              <header className="mb-3">
                <span className="gradientText float-left mr-2 text-2xl font-bold">
                  {step.number}
                </span>
                <h2>{step.title}</h2>
              </header>
              <p>{step.description}</p>

              <span className="g3 absolute left-0 right-0 top-0 mx-auto h-14 w-[2px] -translate-y-[100%]">
                <div className="relative mx-auto"></div>
                <span className="g3 absolute top-0 mx-auto size-2 -translate-x-[35%] rounded-full"></span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevProcess;
