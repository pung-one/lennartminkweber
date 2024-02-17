"use client";
import Shows from "@/components/Shows";
import { showsData } from "@/public/showsData/shows";

export default function Home() {
  return <Shows showsData={showsData} />;
}
