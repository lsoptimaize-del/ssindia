import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display-var",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dmsans-var",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SS India Corporation - Bulk Welding Rods, Hubli",
  description:
    "Karnataka's fastest growing INDARC distributor. Bulk welding rods, verified supplier, 24hr dispatch from Hubli.",
};

import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0D1557]">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
