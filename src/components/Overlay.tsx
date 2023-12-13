import React from "react";
import QuoteCard from "./quote-card";
import martyImg from "@/public/Marty_Neumeier.jpg";
import ourLogoImg from "@/public/westylestuff-logo.png";
import Image from "next/image";

const Overlay = () => {
  return (
    <div>
      <div className="fixed  left-[0vh] top-[2vh]  z-[1000] m-auto h-[98vh] w-[100vw] cursor-pointer rounded-2xl bg-zinc-200/10 backdrop-blur-sm" />
      <div className="fixed left-[10vw] top-[10vh] z-[1002] m-auto h-[360px] w-[480px]  rounded-2xl bg-white/90 p-10  ">
        <div className="z-[1001] -mt-10 ml-2 flex -rotate-6 flex-col items-center gap-6 text-center">
          <h6 className="border-1 small-caps text-4xl text-zinc-800 ">
            We Style Stuff.
          </h6>
          <div className="flex flex-col items-center ">
            <p className="mb-7 text-lg font-semibold text-zinc-800/40">
              <span className="small-caps align-sup text-4xl text-teal-600/70">
                We
              </span>{" "}
              will be launching in December 2023
            </p>

            <Image
              src={ourLogoImg}
              alt="We Style Stuff graphic"
              height={240}
              width={240}
              className="mt-2 rounded-full shadow-lg outline-4 ring-4 ring-gray-300/40 ring-offset-2"
            />
          </div>
        </div>
        <div className="fixed bottom-10 right-10 z-[999] rotate-3">
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
