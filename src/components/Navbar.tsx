import React from "react";
import { navLinks } from "@/lib/data";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <header className="relative z-[999] mt-16 sm:mt-10">
      <div className="fixed left-1/2 top-0 h-[4.5rem] w-full -translate-x-1/2 rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:border-black/40 dark:bg-gray-950 dark:bg-opacity-75 sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"></div>
      <nav className="fixed left-1/2 top-[0.15rem] flex h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {navLinks.map((navlink) => (
            <li
              key={navlink.hash}
              className="relative flex h-3/4 items-center justify-center"
            >
              <Link
                className={cn(
                  "flex w-full items-center justify-center px-3 py-3 transition hover:text-gray-950 dark:text-gray-500 dark:hover:text-gray-300",
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
