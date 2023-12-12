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
    <div className="mx-auto w-full max-w-[500px] rounded-lg bg-white px-5 pb-10 pt-5 text-gray-800 shadow-lg">
      <div className="w-full pb-5 pt-1">
        <div className="ring-3 mx-auto -mt-16 h-20 w-20 overflow-hidden rounded-full shadow-lg outline-4 ring-1  ring-gray-400  ">
          <Image src={imgSrc} alt="{attribution}" width={128} height={128} />
        </div>
      </div>
      <div className="mb-10 w-full">
        <div className="h-3 text-left text-3xl leading-tight text-indigo-500">
          “
        </div>
        <p className="px-5 text-center text-sm text-gray-600">{children}</p>
        <div className="-mt-3 h-3 text-right text-3xl leading-tight text-indigo-500">
          ”
        </div>
      </div>
      <div className="w-full">
        <p className="text-md text-center font-bold text-indigo-500">
          {attribution}
        </p>
        <p className="text-center text-xs text-gray-500">{smHandle}</p>
      </div>
    </div>
  );
};

export default QuoteCard;
