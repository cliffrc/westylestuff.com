import React from "react";
import { navLinks } from "@/lib/data";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <header className="relative z-[999] mt-16 sm:mt-10">
      <div className="fixed left-1/2 top-0 h-[4.5rem] w-full -translate-x-1/2 rounded-none border border-white/40 bg-white/80 shadow-lg shadow-black/[0.03] backdrop-blur-sm  dark:border-black/40 dark:bg-gray-950/75 sm:top-6  sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"></div>
      <nav className="fixed left-1/2 top-[0.15rem] flex h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-sm font-medium text-zinc-500/90 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {navLinks.map((navlink) => (
            <li
              key={navlink.hash}
              className="relative flex h-3/4 items-center justify-center"
            >
              <Link
                className={cn(
                  "dark:hover:gray-300 flex w-full items-center transition hover:text-zinc-950 dark:text-zinc-500",
                )}
                href={navlink.hash}
              >
                {navlink.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
