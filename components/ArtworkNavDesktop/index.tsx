import { ArtworkData } from "@/types";
import NavElement from "../NavElement";
import styled from "styled-components";

export default function ArtworkNavDesktop({
  artworkData,
  activeArtworkId,
  onChange: handleChange,
}: {
  artworkData: ArtworkData[];
  activeArtworkId: number;
  onChange: (artwork: ArtworkData) => void;
}) {
  return (
    <ArtworkList>
      {artworkData.map((artwork) => {
        return (
          <NavElement
            handleClick={() => handleChange(artwork)}
            isActive={activeArtworkId === artwork.id}
            key={artwork.title}
          >
            {artwork.title}
          </NavElement>
        );
      })}
    </ArtworkList>
  );
}

const ArtworkList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  list-style: none;
`;
