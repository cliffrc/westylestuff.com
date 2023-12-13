import {
  attributesServiceData,
  businessServiceData,
  techServiceData,
} from "@/lib/data";
import { ActivityIcon, Layers3 } from "lucide-react";
import PillBox from "./PillBox";

const Services = () => {
  return (
    <section
      className="mt-20 flex scroll-mt-28 flex-col items-center"
      id="skills"
    >
      <Layers3 className="h-12 w-12 text-muted-foreground" />
      <h2 className="mb-2 text-2xl font-semibold">Our services</h2>

      {/* pill-boxes with title*/}
      <PillBox data={techServiceData} title="Technical + Design Services" />
      <ActivityIcon className="my-3 h-6 w-6 -rotate-[10deg] text-4xl font-semibold text-zinc-600/50  dark:text-white/60" />
      <PillBox
        data={businessServiceData}
        title="Business + Marketing Services"
      />
      <ActivityIcon className="divIcon2" />
      <PillBox data={attributesServiceData} title="Our Qualities" />
    </section>
  );
};

export default Services;
