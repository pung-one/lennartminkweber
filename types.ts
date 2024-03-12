import { JSXElementConstructor, ReactComponentElement, ReactNode } from "react";

export type ArtworkData = {
  id: number;
  title: string;
  year: string;
  description: string;
  dimensions: string;
  images: ImageData[];
};

export type ShowsData = {
  id: string;
  title: ReactNode;
  images: ImageData[];
};

export type ImageData = {
  id: string;
  description: ReactNode;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type TextData = {
  id: string;
  title: ReactNode;
  author: string;
  text: ReactNode;
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
