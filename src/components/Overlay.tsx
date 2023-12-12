import React from "react";
import QuoteCard from "./quote-card";
import martyImg from "@/public/Marty_Neumeier.jpg";
import ourLogoImg from "@/public/westylestuff-log.png";
import Image from "next/image";

const Overlay = () => {
  return (
    <div>
      <div className="fixed left-[5vw]  top-[5vh]  z-[1000] m-auto h-[95vh] w-[90vw] cursor-pointer rounded-2xl bg-gray-400/40 backdrop-blur-sm" />
      <div className="fixed left-[10vw] top-[10vh] z-[1001] m-auto  h-[95vh] w-[80vw] rounded-2xl bg-white/70 p-10  ">
        <div className="flex flex-col items-center gap-6 text-center">
          <h6 className="border-1 small-caps text-4xl">We Style Stuff</h6>
          <div className="flex flex-col items-center">
            <p className="mb-12 animate-pulse text-2xl">
              Launching in December 2023
            </p>
            <QuoteCard
              imgSrc={martyImg}
              attribution="Marty Neumeier"
              smHandle="martyneumeier.com"
            >
              Brand is not what you say it is. It&apos;s what they say it is.
            </QuoteCard>
            <Image
              src={ourLogoImg}
              alt="We Style Stuff graphic"
              height={240}
              width={240}
              className="mt-4 rounded-full shadow-lg outline-4 ring-4 ring-gray-300/40 ring-offset-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
