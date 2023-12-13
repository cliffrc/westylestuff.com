import Image from "next/image";
import profileImg from "@/public/westylestuff-profile.png";

const Intro = () => {
  return (
    <section
      className="mx-auto mt-28 max-w-[50rem]  scroll-mt-28 items-center text-center sm:mb-0"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <div>
            <Image
              src={profileImg}
              alt="We Style Stuff logo"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </div>
          <span className="absolute -bottom-4 -right-2 -rotate-12 text-4xl">
            🥇
          </span>
        </div>
      </div>
      <h1 className="small-caps mb-10 mt-7 max-w-lg px-4 text-center text-4xl !leading-[1.5] sm:text-2xl">
        Elevate Your Online Presence by Unleashing the power of Social Media
        Marketing and Advanced Tech Solutions
      </h1>
      <p className="small-caps mb-10  max-w-md px-4 text-center text-base font-normal italic !leading-[1.5] text-zinc-600 sm:text-base">
        ... with{" "}
        <span className=" font-bold underline">
          Our Expertise in Content Repurposing
        </span>
        , Growth Hacking, and{" "}
        <span className=" font-bold underline">
          Cutting-Edge Development Tools
        </span>{" "}
        like Next.js & React."{" "}
        <span className=" font-bold underline">
          Innovative Tech like TypeScript and Prisma
        </span>{" "}
        will help supercharge your brand&apos;s growth and online influence.
      </p>
    </section>
  );
};

export default Intro;
