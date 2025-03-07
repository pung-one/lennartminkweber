import Shows from "@/components/Shows";
import { showsData } from "@/public/showsData/shows";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exhibitions | Lennart Mink Weber",
  metadataBase: new URL("https://www.lennartminkweber.com"),
  alternates: {
    canonical: "/",
  },
  description: "Exhibitions | Lennart Mink Weber",
  category: "art",
  authors: [
    { name: "Lennart Mink Weber" },
    { name: "Paul Ungerer", url: "https://github.com/pung-one" },
  ],
  keywords: [
    "Lennart Mink Weber",
    "Lennart",
    "Mink",
    "Weber",
    "Portfolio",
    "Kuenstler",
    "Artist",
    "Kunst",
    "Arbeiten",
    "Bilder",
    "Exhibitions",
    "Ausstellungen",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    siteName: "Exhibitions | Lennart Mink Weber",
  },
};

export default function Home() {
  return <Shows showsData={showsData} />;
}
