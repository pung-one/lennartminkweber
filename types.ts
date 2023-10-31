type artworkData = {
  title: string;
  year: string;
  description: string;
  dimensions: string;
  images: { width: number; height: number; url: string }[];
}[];

type artworkMetadata = {
  position: number | undefined;
  title: string | undefined;
  year: string | undefined;
  description: string | undefined;
  dimensions: string | undefined;
};

type imageData = {
  url: string;
  width: number;
  height: number;
};
