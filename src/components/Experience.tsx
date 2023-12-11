import React from "react";
import { ActivityIcon, Waves } from "lucide-react";
import SectionHeader from "./SectionHeader";

const Experience = () => {
  return (
    <section
      className="mt-12  flex scroll-mt-28 flex-col items-center"
      id="experience"
    >
      <Waves className="h-12 w-12 text-muted-foreground" />
      <h2 className="mb-2 text-2xl font-semibold">Experience</h2>
      <div className="mt-2 max-w-prose rounded-xl bg-foreground/10 px-9 pb-2 pt-8 text-sm">
        <p className="first font-normal">
          Since 2019 I have self-funded the running my own small firm. With
          varying results, though I have high hopes for the above projects.
          Prior to this, while being stay-at-home dad to our two daughters, I
          spent a considerable amount of time working small-scale tech projects.
          Plenty of home improvement projects kept me busy and distracted.
        </p>
        <p>
          Prior to emigrating to the Netherlands and graduation, I worked at
          various companies and charitable organizations. the included Trans
          World Airlines, KLM Cargo, DHL International UK, Notting Hill Housing
          Trust (among others), Human Rights Watch (London office), Farr
          Vintners, Nederlander Theaters (London ) and others.
        </p>
        <ActivityIcon className="divIcon2 mx-auto" />
      </div>
    </section>
  );
};

export default Experience;
