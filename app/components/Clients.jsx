"use client";
import React from "react";

import ClientSwiper from "./ClientSwiper";
const Clients = () => {
  return (
    <section className="relative">
      <div className="wrap1 relative overflow-hidden py-14 pb-20">
        <span className="g1 absolute bottom-0 right-96 h-12 w-12 translate-y-[50%] rounded-full p-0"></span>
        <span className="g1 inline-block h-[4px] w-[60px] -translate-y-3 rounded-2xl"></span>

        <h1 className="max-w-[500px] whitespace-pre-line first-line:font-light">
          Meet the People <br /> We are Working With
        </h1>
      </div>
      <ClientSwiper />
    </section>
  );
};

export default Clients;
