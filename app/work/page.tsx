import Artworks from "@/components/Artworks";

export default async function WorkPage() {
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

  const artworks = entries.items.map(({ fields }: { fields: any }) => {
    const { title, year, description, dimensions, images } = fields;
    return {
      title: title,
      year: year,
      description: description,
      dimensions: dimensions,
      images: images.map((image: any) => {
        const { url, details } = image.fields.file;
        return {
          url: url,
          width: details.image.width,
          height: details.image.height,
        };
      }),
    };
  });

  return <Artworks artworkData={artworks} />;
}
