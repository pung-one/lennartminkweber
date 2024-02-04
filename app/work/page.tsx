import Shows from "@/components/Shows";
import { showsData } from "@/public/showsData/shows";

export default async function WorkPage() {
  return <Shows showsData={showsData} />;
}
