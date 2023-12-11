import { metadata } from "@/app/layout";
import React from "react";
import lightFormat from "date-fns/lightFormat";
import { ActivityIcon, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mb-10 mt-10 px-4 text-center text-gray-500">
      <ActivityIcon className="divIcon2 mx-auto" />
      <div className="border-1 mx-auto mb-8 mt-8 flex max-w-xs flex-col items-center rounded-xl border border-foreground/70 bg-zinc-300/20 py-12 pb-4 pt-2">
        <ul className="flex flex-row justify-center gap-3">
          <li className="">
            <a href="https://instagram.com/cliffrcNL">
              <Instagram />
            </a>
          </li>
          <li className="">
            <a href="https://youtube.com/10strata">
              <Youtube />
            </a>
          </li>
          <li className="">
            <a href="https://twitter.com/cliffrc">
              <Twitter />
            </a>
          </li>
        </ul>
      </div>
      <div className="border-t-[1px] border-zinc-600/50 p-6 ">
        <p className="small-caps text-xs">
          &copy; {lightFormat(new Date(), "yyyy")} {metadata.creator}. All
          rights reserved.
        </p>
        <small className="small-caps text-[0.675rem] font-normal tracking-wide text-zinc-400">
          {/** Add this to metadata in layout and use metadata object to pull in code. Do same with date*/}
          Handcrafted with TailwindCSS, Next.js (App Router and Server Actions),
          TypeScript, Vercel hosting
        </small>
      </div>
      {/** FIX formatting here */}
    </footer>
  );
};

export default Footer;
