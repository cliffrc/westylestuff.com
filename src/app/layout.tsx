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
    template: "%s | We Style Stuff",
    default: "We Style Stuff", // a default is required when creating a template
  },
  description:
    "A branding and web agemcy with ideals honed in creative coding.",
  keywords: ["branding", "web development", "creativity", "creative coding"],
  generator: "Next.js",
  applicationName: "westylestuff.com",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "We Style Stuff", url: "https://westylestuff.com" }],
  creator: "Cliff Cunnington",
  owner: "We Style Stuff | A Cliff Cunnington Enterprise",
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
