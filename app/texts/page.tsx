import Texts from "@/components/Texts";
import { texts } from "@/public/textsData/texts";

export default async function TextsPage() {
  return <Texts texts={texts} />;
}
