import { ArtworkData } from "@/types";
import styled from "styled-components";
import NavElement from "../NavElement";

type Props = {
  artworkData: ArtworkData[];
  activeArtwork: ArtworkData;
  setActiveArtwork: (prev: ArtworkData) => void;
};

export default function ArtworksNav({
  artworkData,
  activeArtwork,
  setActiveArtwork,
}: Props) {
  return (
    <ArtworkNav>
      {artworkData.map((artwork) => {
        return (
          <NavElement
            handleClick={() => setActiveArtwork(artwork)}
            isActive={activeArtwork.title === artwork.title}
            key={artwork.title}
          >
            {artwork.title}
          </NavElement>
        );
      })}
    </ArtworkNav>
  );
}

const ArtworkNav = styled.ul`
  list-style: none;
`;
