import Info from "@/components/Info";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Info | Lennart Mink Weber",
  description: "About Lennart Mink Weber",
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
    "Lebenslauf",
    "CV",
    "Ausbildung",
    "About",
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
    siteName: "Info | Lennart Mink Weber",
  },
};

export default function InfoPage() {
  return <Info />;
}
