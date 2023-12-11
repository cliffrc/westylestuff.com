import {
  businessSkillsData,
  personalSkillsData,
  techSkillsData,
} from "@/lib/data";
import { ActivityIcon, Layers3 } from "lucide-react";
import PillBox from "./PillBox";

const Skills = () => {
  return (
    <section
      className="mt-20 flex scroll-mt-28 flex-col items-center"
      id="skills"
    >
      <Layers3 className="h-12 w-12 text-muted-foreground" />
      <h2 className="mb-2 text-2xl font-semibold">My skills</h2>

      {/* pill-boxes with title*/}
      <PillBox data={techSkillsData} title="Technical + Design Skills" />
      <ActivityIcon className="my-3 h-6 w-6 -rotate-[10deg] text-4xl font-semibold text-zinc-600/50  dark:text-white/60" />
      <PillBox data={businessSkillsData} title="Business + Marketing Skills" />
      <ActivityIcon className="divIcon2" />
      <PillBox data={personalSkillsData} title="Personal Qualities" />
    </section>
  );
};

export default Skills;
