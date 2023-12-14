import Image from "next/image";
import type { StaticImageData } from "next/image";
import React from "react";

type QuoteCardProps = {
  children: React.ReactNode;
  attribution: string;
  smHandle: string;
  imgSrc: StaticImageData;
};

const QuoteCard = ({
  children,
  attribution,
  smHandle,
  imgSrc,
}: QuoteCardProps) => {
  return (
    <div className="mx-auto rounded-lg border-black bg-white text-gray-800 shadow-lg sm:w-full sm:max-w-[500px] sm:border-0 sm:px-5 sm:pb-12 sm:pt-5 sm:opacity-90">
      <div className="pt-1 sm:w-full sm:pb-5">
        <div className="mx-auto h-10 w-10 overflow-hidden  rounded-full shadow-lg outline-4 ring-2 ring-zinc-800/30 ring-offset-2 sm:-mt-10 sm:h-20  sm:w-20">
          <Image
            src={imgSrc}
            alt="{attribution}"
            priority
            style={{
              width: "128px",
              height: "auto",
            }}
            className="-rotate-[10deg] sepia-[.7]"
          />
        </div>
      </div>
      <div className="sm:mb-10 sm:w-full">
        <div className="h-3 text-left text-3xl leading-tight text-teal-600">
          “
        </div>
        <p className="small-caps px-5 text-center text-sm text-zinc-600">
          {children}
        </p>
        <div className="h-3 text-right text-3xl leading-tight text-teal-600">
          ”
        </div>
      </div>
      <div className="sm:w-full">
        <p className="text-md text-center font-semibold text-teal-600">
          {attribution}
        </p>
        <p className="text-center text-xs text-zinc-500">{smHandle}</p>
      </div>
    </div>
  );
};

export default QuoteCard;
