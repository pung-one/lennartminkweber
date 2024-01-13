export type ArtworkData = {
  title: string;
  year: string;
  description: string;
  dimensions: string;
  images: { width: number; height: number; url: string }[];
};

export type ArtworkMetadata = {
  title: string | undefined;
  year: string | undefined;
  description: string | undefined;
  dimensions: string | undefined;
};

export type ArtworkImageData = {
  url: string;
  width: number;
  height: number;
}[];

export type HandlNavArtworks = {
  prevArtwork: () => void;
  nextArtwork: () => void;
};
