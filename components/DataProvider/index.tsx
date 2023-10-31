import { SetStateAction } from "react";

export default async function DataProvider(props: { children: any }) {
  const contentful = require("contentful");

  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const entries = await client
    .getEntries({
      content_type: "artwork",
    })
    .catch((e: any) => {
      console.log(e);
      return { notFound: true };
    });

  /* const artworks = entries.items.map((entry: any) => {
    return {
      titleImage: entry.fields.titleImage,
      slug: entry.fields.slug,
      reihenfolge: entry.fields.reihenfolge,
    };
  }); */

  console.log(entries);
  /* props.setArtworks(entries); */

  return <>{props.children}</>;
}
