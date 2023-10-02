import { Barlow_Condensed, Bellefair, Barlow } from "next/font/google";

export const BarlowCon = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-barlow-con",
});

export const BellefairFont = Bellefair({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-belle",
});

export const BarlowFont = Barlow({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-barlow",
});
