import { Poppins } from "next/font/google";
import localFont from "next/font/local";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const sixcaps = localFont({
  src: "../assets/fonts/sixcaps-regular.woff2",
  variable: "--font-sixcaps",
  display: "swap",
});
