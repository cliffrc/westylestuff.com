import { Clapperboard } from "lucide-react";
import React from "react";
import SectionHeader from "./SectionHeader";
import { personalProjectsData } from "@/lib/data";
import PillBox from "./PillBox";

const Projects = () => {
  return (
    <section
      className=" mt-12 flex scroll-mt-28 flex-col items-center"
      id="projects"
    >
      <Clapperboard className="h-12 w-12 text-muted-foreground" />
      <h2 className="mb-2 text-2xl font-semibold">Projects</h2>

      {/* gallery box of text and images */}
      <PillBox data={personalProjectsData} title="Business Projects" />
    </section>
  );
};

export default Projects;
