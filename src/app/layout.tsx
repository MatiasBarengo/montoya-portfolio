import "./globals.css";
import { poppins, sixcaps } from "@/styles/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://montoya-portfolio.vercel.app/"),
  title: {
    default: "Montoya - Creative Portfolio",
    template: "%s | Montoya Portfolio"
  },
  description:
    "We are a creative studio, specialized in strategy, branding design, and development. Our work is always at the intersection of design and technology.",
  keywords: ["portfolio", "creative", "design", "branding", "development", "studio", "agency"],
  authors: [{ name: "Montoya Studio" }],
  creator: "Montoya Studio",
  publisher: "Montoya Studio",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://montoya-portfolio.vercel.app/",
    siteName: "Montoya Portfolio",
    title: "Montoya - Creative Portfolio",
    description: "Creative studio specialized in strategy, branding design, and development.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Montoya - Creative Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Montoya - Creative Portfolio",
    description: "Creative studio specialized in strategy, branding design, and development.",
    images: ["/opengraph-image.png"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${sixcaps.variable}`}>
      <body suppressHydrationWarning>
        <div className="page-transition-wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}
