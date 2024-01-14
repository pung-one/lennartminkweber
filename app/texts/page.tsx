import Texts from "@/components/Texts";
import { TextData } from "@/types";

export default async function TextsPage() {
  const contentful = require("contentful");

  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const entries = await client
    .getEntries({
      content_type: "text",
    })
    .catch((e: any) => {
      console.log(e);
      return { notFound: true };
    });

  const textData = entries.items.map(({ fields }: { fields: TextData }) => {
    const { title, author, text } = fields;
    return {
      title: title,
      author: author,
      text: text,
    };
  });

  return <Texts texts={textData} />;
}
