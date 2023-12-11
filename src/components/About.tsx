import React from "react";
import { ActivityIcon, PenLine } from "lucide-react";
import SectionHeader from "./SectionHeader";

const About = () => {
  return (
    <section
      className="mt-12 flex scroll-mt-28 flex-col items-center"
      id="about"
    >
      <PenLine className="h-12 w-12 text-muted-foreground" />
      <h2 className="text-2xl font-semibold">About</h2>
      <div className="mt-2 max-w-prose rounded-xl bg-foreground/10 px-9 pb-2 pt-8 text-sm">
        <p className="first">
          Hello! I&rsquo;m Cliff. I started learning web development in May
          2020, which is the start of the pandemic. I have nothing much to do so
          I decided to learn web development from a udemy course, then started
          watching a bunch of youtube videos to explore more about web
          development especially frontend development. There are a lot of things
          and technologies to learn in frontend development and I am motivated
          to learn as much as possible. I enjoy learning something new and
          getting feedback to make myself better and improve. In this website I
          will be writing some blogs and showcase my projects. I believe that
          writing what I have learned is the best way to remember things, and I
          can share my knowledge along the way. So do contact me and I will be
          very happy to help!
        </p>
        <ActivityIcon className="divIcon2 mx-auto" />
      </div>
    </section>
  );
};

export default About;
