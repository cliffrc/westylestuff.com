import type { Metadata } from "next";
import { Inter, Josefin_Sans } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: {
    template: "%s | cliff",
    default: "Cliff", // a default is required when creating a template
  },
  description:
    "A founder + software engineer intern at 10strata who loves learning the marketing ropes",
  keywords: ["Next.js", "React", "Tailwindcss", "web development"],
  generator: "Next.js",
  applicationName: "cliffrc.nl",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "Cliff", url: "https://cliffrc.nl" }],
  creator: "Cliff Cunnington",
  publisher: "Cliff Cunnington Enterprise",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light  min-h-[5000px] font-sans antialiased">
      <body
        className={cn(
          "grainy bg-white text-foreground",
          inter.className,
          josefin.variable,
        )}
      >
        <Navbar />
        {children}
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
