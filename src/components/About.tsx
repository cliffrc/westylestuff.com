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
      <h2 className="text-2xl font-semibold">About Us</h2>
      <div className="mt-2 max-w-prose rounded-xl bg-foreground/10 px-9 pb-2 pt-8 text-sm">
        <p className="first">This is what we offer!</p>
        <ul className="sflex mt-4 flex-col items-center ">
          <li className="mt-3">
            🚀 <strong>Start Your Growth Journey</strong> - Dive into the world
            of advanced social media strategies and state-of-the-art tech to
            scale your business. Click to learn more!
          </li>
          <li className="mt-3">
            🌟 <strong>Discover Our Solutions</strong> - Join us in paving the
            path to digital excellence with our unique blend of content
            creativity and technical prowess. Click here to explore!
          </li>
          <li className="mt-3">
            ✨ <strong>Begin Your Digital Transformation</strong> - Step into
            the future with our integrated marketing and tech solutions. Click
            here to embark on your digital transformation journey.
          </li>
          <li className="mt-3">
            ⚡ <strong>Unleash Creative Power</strong> - Discover the perfect
            blend of technology and creativity to take your brand to new
            heights. Click to unleash your potential.
          </li>
          <li className="mt-3">
            🚀 <strong>Accelerate Your Growth</strong> - Ready to grow faster
            and smarter? Tap into our advanced strategies and tech tools. Click
            here to accelerate your journey.
          </li>
        </ul>

        <ActivityIcon className="divIcon2 mx-auto" />
      </div>
    </section>
  );
};

export default About;
