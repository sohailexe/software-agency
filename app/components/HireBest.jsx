import React from "react";
import Image from "next/image";
import Link from "next/link";
const HireBest = () => {
  return (
    <section className="wrap1 py-14">
      <div className="flex items-center justify-start gap-6 rounded-2xl bg-[#E4ECF7] px-16 py-14">
        <h1>Hire the best developers and designers around!</h1>
        <Link href="/#">
          <Image src="/hire.png" width={330} height={300} alt="hire" />
        </Link>
      </div>
    </section>
  );
};

export default HireBest;
