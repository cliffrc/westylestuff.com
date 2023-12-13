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
    <div className="mx-auto w-full max-w-[500px] rounded-lg bg-white/90 px-5 pb-12 pt-5 text-gray-800 shadow-lg">
      <div className="w-full pb-5 pt-1">
        <div className="mx-auto -mt-10 h-20 w-20 overflow-hidden rounded-full shadow-lg outline-4 ring-2 ring-zinc-800/30  ring-offset-2  ">
          <Image
            src={imgSrc}
            alt="{attribution}"
            width={128}
            height={128}
            className="-rotate-[10deg] sepia-[.7]"
          />
        </div>
      </div>
      <div className="mb-10 w-full">
        <div className="h-3 text-left text-3xl leading-tight text-teal-600">
          “
        </div>
        <p className="small-caps px-5 text-center text-sm text-zinc-600">
          {children}
        </p>
        <div className="-mt-3 h-3 text-right text-3xl leading-tight text-teal-600">
          ”
        </div>
      </div>
      <div className="w-full">
        <p className="text-md text-center font-semibold text-teal-600">
          {attribution}
        </p>
        <p className="text-center text-xs text-zinc-500">{smHandle}</p>
      </div>
    </div>
  );
};

export default QuoteCard;
