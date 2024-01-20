import { ArtworkData } from "@/types";
import { PiArrowDownThin, PiArrowUpThin } from "react-icons/pi";
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
  const handleNavArtworks = {
    prevArtwork: () => {
      const prevId =
        activeArtworkId > 0 ? activeArtworkId - 1 : artworkData.length;
      handleChange(artworkData.find((artwork) => artwork.id === prevId)!);
    },
    nextArtwork: () => {
      const nextId =
        activeArtworkId < artworkData.length ? activeArtworkId + 1 : 1;
      handleChange(artworkData.find((artwork) => artwork.id === nextId)!);
    },
  };

  return (
    <Navigation>
      <StyledButton onClick={() => handleNavArtworks.prevArtwork()}>
        <PiArrowUpThin />
      </StyledButton>
      <p>{`${activeArtworkId}/${artworkData.length}`}</p>
      <StyledButton onClick={() => handleNavArtworks.nextArtwork()}>
        <PiArrowDownThin />
      </StyledButton>
    </Navigation>
  );
}

const Navigation = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  gap: 35px;
  button {
    display: flex;
    align-items: center;
  }
`;
