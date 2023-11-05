type ArtworkData = {
  title: string;
  year: string;
  description: string;
  dimensions: string;
  images: { width: number; height: number; url: string }[];
}[];

type ArtworkMetadata = {
  title: string | undefined;
  year: string | undefined;
  description: string | undefined;
  dimensions: string | undefined;
};

type ArtworkImageData = {
  url: string;
  width: number;
  height: number;
}[];

type HandlNavArtworks = {
  prevArtwork: () => void;
  nextArtwork: () => void;
};
