import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Lennart Mink Weber",
  description: "Contact Lennart Mink Weber",
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
    "Kontakt",
    "Contact",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function ContactPage() {
  return <Contact />;
}
