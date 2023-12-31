import React from "react";
import QuoteCard from "./quote-card";
import martyImg from "@/public/Marty_Neumeier.jpg";
import ourLogoImg from "@/public/westylestuff-logo.png";
import Image from "next/image";

const Overlay = () => {
  return (
    <div>
      <div className="fixed left-0 top-0 z-[1000] m-auto mr-3 h-[98vh] w-[100vw] cursor-pointer rounded-2xl bg-zinc-200/10 backdrop-blur-sm sm:left-[0vh] sm:top-[2vh] sm:mr-0" />
      <div className="fixed left-2 top-0  z-[1002] m-auto rounded-2xl bg-white/90 p-10 sm:left-[10vw]  sm:top-[10vh] sm:h-[360px] sm:w-[480px]  ">
        <div className="z-[1001] -mt-4 ml-2 flex flex-col items-center gap-6 text-center sm:-rotate-6">
          <h6 className="border-1 small-caps text-4xl text-zinc-800 ">
            We Style Stuff.
          </h6>
          <div className="flex flex-col items-center ">
            <p className="mb-7 text-lg font-semibold text-zinc-800/40">
              <span className="small-caps align-sup text-4xl text-teal-600/70">
                We
              </span>{" "}
              will be launching in January 2024
            </p>

            <Image
              src={ourLogoImg}
              alt="We Style Stuff graphic"
              priority
              style={{
                width: "240px",
                height: "auto",
              }}
              className="mt-2 rounded-full shadow-lg outline-4 ring-4 ring-gray-300/40 ring-offset-2"
            />
          </div>
        </div>
        <div className="fixed bottom-2 right-1 z-[900]  rotate-3 sm:bottom-10 sm:right-10 sm:rotate-3">
          <QuoteCard
            imgSrc={martyImg}
            attribution="Marty Neumeier"
            smHandle="Author of The Brand Flip"
          >
            Brand is not what you say it is. It&apos;s what they say it is.
          </QuoteCard>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
