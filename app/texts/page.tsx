import Texts from "@/components/Texts";
import { texts } from "@/public/textsData/texts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Texts | Lennart Mink Weber",
  description: "Texts | Lennart Mink Weber",
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
    "Texte",
    "Referenzen",
    "Erwähnungen",
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
    siteName: "Texts | Lennart Mink Weber",
  },
};

export default function TextsPage() {
  return <Texts texts={texts} />;
}
