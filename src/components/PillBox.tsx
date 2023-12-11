import { techSkillsData } from "@/lib/data";
import React from "react";
/* pill-box with title*/

interface PillBoxProps {
  title: string;
  data: readonly string[];
}

const PillBox = ({ data, title }: PillBoxProps) => {
  return (
    <div className="my-2 max-w-md items-center rounded-xl bg-foreground/10 px-4 pb-6 pt-2.5">
      <h3 className="mb-2 text-center text-lg">{title}</h3>
      <ul className="mt-2 flex  flex-wrap justify-center gap-2.5 text-sm">
        {data.map((pillWord, index) => (
          <li
            className="small-caps rounded-xl bg-zinc-500/30 px-[1.375rem] pb-1.5  pt-[0.475rem] text-[0.775rem] font-semibold text-zinc-800"
            key={index}
          >
            {pillWord}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PillBox;
